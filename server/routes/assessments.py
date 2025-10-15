"""
Assessment generation and evaluation routes
"""
from fastapi import APIRouter, HTTPException, status
from groq import Groq
import json
from typing import List

from models import (
    AssessmentRequest, AssessmentResponse, Question, QuestionOption,
    SubmitAssessmentRequest, AssessmentResult
)
from database import db
from config import settings

router = APIRouter()
groq_client = Groq(api_key=settings.GROQ_API_KEY)

async def generate_questions_ai(request: AssessmentRequest) -> List[dict]:
    """Generate assessment questions using AI"""
    
    topic_text = f" on the topic '{request.topic}'" if request.topic else ""
    
    prompt = f"""Generate {request.question_count} assessment questions for {request.course.value} at {request.level.value} level{topic_text}.

Question types to include: {', '.join(request.question_types)}

For each question, provide:
- Question text
- Type (mcq, descriptive, true_false)
- Options (for MCQ)
- Correct answer
- Detailed explanation
- Marks (1-5 based on difficulty)

Return JSON format:
{{
  "questions": [
    {{
      "id": "q1",
      "type": "mcq",
      "question": "Question text here?",
      "options": [
        {{"option": "A", "text": "Option A text"}},
        {{"option": "B", "text": "Option B text"}},
        {{"option": "C", "text": "Option C text"}},
        {{"option": "D", "text": "Option D text"}}
      ],
      "correct_answer": "A",
      "explanation": "Detailed explanation",
      "marks": 1
    }}
  ]
}}

Make questions challenging but fair for the {request.level.value} level."""

    try:
        completion = groq_client.chat.completions.create(
            model=settings.GROQ_MODEL,
            messages=[
                {
                    "role": "system",
                    "content": "You are an expert exam question creator. Generate high-quality, educational assessment questions in JSON format."
                },
                {"role": "user", "content": prompt}
            ],
            temperature=0.9,
            max_tokens=4000
        )
        
        response_text = completion.choices[0].message.content
        
        # Extract JSON
        if "```json" in response_text:
            response_text = response_text.split("```json")[1].split("```")[0].strip()
        elif "```" in response_text:
            response_text = response_text.split("```")[1].split("```")[0].strip()
        
        questions_data = json.loads(response_text)
        return questions_data.get("questions", [])
        
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Question generation failed: {str(e)}"
        )

@router.post("/generate", response_model=AssessmentResponse)
async def generate_assessment(request: AssessmentRequest):
    """Generate new assessment"""
    
    # Generate questions using AI
    questions_data = await generate_questions_ai(request)
    
    # Save to database
    assessment = await db.create_assessment(
        user_id=request.user_id,
        course=request.course.value,
        level=request.level.value,
        topic=request.topic or "General",
        questions=questions_data
    )
    
    # Convert to response model
    questions = []
    total_marks = 0
    
    for q_data in questions_data:
        options = None
        if q_data.get("options"):
            options = [QuestionOption(**opt) for opt in q_data["options"]]
        
        questions.append(Question(
            id=q_data["id"],
            type=q_data["type"],
            question=q_data["question"],
            options=options,
            correct_answer=q_data.get("correct_answer"),
            explanation=q_data.get("explanation"),
            marks=q_data.get("marks", 1)
        ))
        total_marks += q_data.get("marks", 1)
    
    return AssessmentResponse(
        assessment_id=str(assessment["_id"]),
        course=request.course,
        level=request.level,
        topic=request.topic,
        questions=questions,
        total_marks=total_marks,
        created_at=assessment["created_at"]
    )

@router.post("/submit", response_model=AssessmentResult)
async def submit_assessment(request: SubmitAssessmentRequest):
    """Submit assessment and get results"""
    
    # Get assessment from database
    from bson import ObjectId
    assessment = await db.db.assessments.find_one({"_id": ObjectId(request.assessment_id)})
    
    if not assessment:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Assessment not found"
        )
    
    # Evaluate answers
    questions = assessment["questions"]
    answers = {ans["question_id"]: ans["answer"] for ans in request.answers}
    
    correct_count = 0
    total_marks = 0
    scored_marks = 0
    detailed_results = []
    
    for question in questions:
        q_id = question["id"]
        user_answer = answers.get(q_id)
        correct_answer = question.get("correct_answer")
        marks = question.get("marks", 1)
        
        total_marks += marks
        is_correct = user_answer == correct_answer
        
        if is_correct:
            correct_count += 1
            scored_marks += marks
        
        detailed_results.append({
            "question_id": q_id,
            "question": question["question"],
            "user_answer": user_answer,
            "correct_answer": correct_answer,
            "is_correct": is_correct,
            "marks_awarded": marks if is_correct else 0,
            "explanation": question.get("explanation")
        })
    
    # Calculate percentage
    percentage = (scored_marks / total_marks * 100) if total_marks > 0 else 0
    
    # Update assessment in database
    await db.submit_assessment(
        assessment_id=request.assessment_id,
        answers=request.answers,
        score=scored_marks
    )
    
    return AssessmentResult(
        assessment_id=request.assessment_id,
        score=scored_marks,
        total_marks=total_marks,
        percentage=round(percentage, 2),
        correct_answers=correct_count,
        total_questions=len(questions),
        detailed_results=detailed_results
    )

@router.get("/{user_id}")
async def get_user_assessments(user_id: str):
    """Get all assessments for a user"""
    from bson import ObjectId
    
    cursor = db.db.assessments.find(
        {"user_id": ObjectId(user_id)}
    ).sort("created_at", -1)
    
    assessments = await cursor.to_list(length=None)
    
    # Convert ObjectId to string
    for assessment in assessments:
        assessment["_id"] = str(assessment["_id"])
        assessment["user_id"] = str(assessment["user_id"])
    
    return {"assessments": assessments}
