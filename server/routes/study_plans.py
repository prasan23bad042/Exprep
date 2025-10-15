"""
Study plan generation routes
"""
from fastapi import APIRouter, HTTPException, status
from groq import Groq
import json

from models import StudyPlanRequest, StudyPlanResponse, WeekPlan, DailyTask
from database import db
from config import settings

router = APIRouter()
groq_client = Groq(api_key=settings.GROQ_API_KEY)

async def generate_study_plan_ai(request: StudyPlanRequest) -> dict:
    """Generate study plan using AI"""
    
    prompt = f"""Generate a detailed {request.duration}-week study plan for {request.course.value} at {request.level.value} level.

Requirements:
- Student can study {request.hours_per_day} hours per day
- Break down into weekly topics and daily tasks
- Include specific resources and exercises
- Make it progressive and achievable
{f"- Focus on these topics: {', '.join(request.topics)}" if request.topics else ""}

Return a JSON structure with this format:
{{
  "weeks": [
    {{
      "week_number": 1,
      "topics": ["Topic 1", "Topic 2"],
      "daily_tasks": [
        {{
          "day": 1,
          "topic": "Introduction to Topic 1",
          "duration": 120,
          "resources": ["Chapter 1", "Video tutorial"],
          "exercises": ["Exercise 1.1", "Practice problems"]
        }}
      ]
    }}
  ]
}}

Generate a comprehensive, realistic study plan."""

    try:
        completion = groq_client.chat.completions.create(
            model=settings.GROQ_MODEL,
            messages=[
                {
                    "role": "system",
                    "content": "You are an expert educational planner. Generate structured, achievable study plans in JSON format."
                },
                {"role": "user", "content": prompt}
            ],
            temperature=0.8,
            max_tokens=4000
        )
        
        response_text = completion.choices[0].message.content
        
        # Extract JSON from response (handle markdown code blocks)
        if "```json" in response_text:
            response_text = response_text.split("```json")[1].split("```")[0].strip()
        elif "```" in response_text:
            response_text = response_text.split("```")[1].split("```")[0].strip()
        
        plan_data = json.loads(response_text)
        return plan_data
        
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Study plan generation failed: {str(e)}"
        )

@router.post("/generate", response_model=StudyPlanResponse)
async def generate_study_plan(request: StudyPlanRequest):
    """Generate personalized study plan"""
    
    # Generate plan using AI
    plan_data = await generate_study_plan_ai(request)
    
    # Save to database
    study_plan = await db.create_study_plan(
        user_id=request.user_id,
        course=request.course.value,
        level=request.level.value,
        duration=request.duration,
        plan_data=plan_data
    )
    
    # Convert to response model
    weeks = []
    for week_data in plan_data.get("weeks", []):
        daily_tasks = [
            DailyTask(**task) for task in week_data.get("daily_tasks", [])
        ]
        weeks.append(WeekPlan(
            week_number=week_data["week_number"],
            topics=week_data["topics"],
            daily_tasks=daily_tasks
        ))
    
    return StudyPlanResponse(
        plan_id=str(study_plan["_id"]),
        course=request.course,
        level=request.level,
        duration=request.duration,
        weeks=weeks,
        created_at=study_plan["created_at"]
    )

@router.get("/{user_id}")
async def get_user_study_plans(user_id: str):
    """Get all study plans for a user"""
    plans = await db.get_user_study_plans(user_id)
    
    # Convert ObjectId to string
    for plan in plans:
        plan["_id"] = str(plan["_id"])
        plan["user_id"] = str(plan["user_id"])
    
    return {"plans": plans}

@router.get("/{plan_id}/details")
async def get_study_plan_details(plan_id: str):
    """Get detailed study plan"""
    # Implementation for getting specific plan details
    pass
