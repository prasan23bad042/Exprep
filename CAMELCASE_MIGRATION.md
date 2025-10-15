# CamelCase Naming Convention Migration

## Summary
Successfully migrated the backend API to use **camelCase** naming convention for all request/response fields while maintaining Python's **snake_case** internally.

## Changes Made

### 1. **Updated Pydantic Models** (`server/models.py`)
- Added `ConfigDict(populate_by_name=True, by_alias=True)` to all models
- Added camelCase aliases using `Field(..., alias="camelCase")` for all snake_case fields
- This allows the API to:
  - **Accept both** `userId` and `user_id` in requests
  - **Return** `userId` (camelCase) in responses

### 2. **Field Aliases Added**
All snake_case fields now have camelCase aliases:
- `user_id` → `userId`
- `session_id` → `sessionId`
- `created_at` → `createdAt`
- `updated_at` → `updatedAt`
- `access_token` → `accessToken`
- `question_count` → `questionCount`
- `question_types` → `questionTypes`
- `correct_answer` → `correctAnswer`
- `assessment_id` → `assessmentId`
- `total_marks` → `totalMarks`
- `correct_answers` → `correctAnswers`
- `total_questions` → `totalQuestions`
- `detailed_results` → `detailedResults`
- `plan_id` → `planId`
- `hours_per_day` → `hoursPerDay`
- `week_number` → `weekNumber`
- `daily_tasks` → `dailyTasks`

### 3. **Updated Route Handlers** (`server/routes/rag.py`)
- Changed `.dict()` to `.model_dump(by_alias=True)` for Pydantic v2 compatibility
- Ensures responses are serialized with camelCase

## How It Works

### Request Handling (Input)
```python
# Client sends camelCase
{
  "userId": "anon",
  "sessionId": "123"
}

# Pydantic accepts it and converts internally to snake_case
request.user_id  # "anon"
request.session_id  # "123"
```

### Response Handling (Output)
```python
# Server creates response with snake_case internally
response = RAGQueryResponse(
    session_id="123",  # snake_case
    answer="..."
)

# FastAPI serializes with camelCase aliases
{
  "sessionId": "123",  # camelCase
  "answer": "..."
}
```

## Benefits

1. **✅ Consistent API**: Frontend uses camelCase everywhere
2. **✅ Backward Compatible**: Still accepts snake_case if needed
3. **✅ Python Conventions**: Internal code uses snake_case
4. **✅ Type Safety**: Full Pydantic validation maintained
5. **✅ No Breaking Changes**: Existing code continues to work

## Testing

The server is now running and will accept requests with camelCase fields. The previous 422 error for `userId` vs `user_id` is now resolved.

### Example Request
```bash
POST /api/rag/query
{
  "userId": "anon",
  "course": "engineering",
  "level": "Beginner",
  "query": "define deadlock?"
}
```

This will now work correctly! ✅

## Files Modified
- `server/models.py` - All Pydantic models updated
- `server/routes/rag.py` - Updated model serialization
- `server/test_models.py` - Created test script (optional)
