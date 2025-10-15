# Exam Prep Chat Assistant

A modern, AI-powered exam preparation assistant with a sleek dark-themed UI. Help students prepare for Schooling (TN 9-10), Engineering (CSE), and Government exams (SSC CGL) with personalized study plans and instant AI responses.

## Features

- **Multi-Course Support**: Schooling (Tamil Nadu 9th & 10th), Engineering (CSE - COA/OS), Government Exams (SSC CGL)
- **Adaptive Learning Levels**: Beginner, Intermediate, Expert difficulty settings
- **AI-Powered Chat**: RAG-based intelligent responses with source citations
- **Modern Dark UI**: Sleek interface optimized for extended study sessions
- **Quick Actions**: Study Plan generation and Assessment tools (coming soon)

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: FastAPI (Python), MongoDB
- **AI**: Groq API (fast inference), OpenAI (embeddings)
- **State Management**: React Query (TanStack Query)
- **Vector Search**: MongoDB Atlas Vector Search

## Required API Endpoints

### 1. POST `/api/auth/login`
User authentication endpoint.

**Request Payload:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "string",
    "name": "string",
    "username": "string"
  }
}
```

### 2. GET `/api/user/session`
Get current user session.

**Response:**
```json
{
  "user": {
    "id": "string",
    "name": "string",
    "loggedIn": true
  }
}
```

### 3. POST `/api/rag/query`
Main chat/query endpoint with RAG integration.

**Request Payload:**
```json
{
  "userId": "string",
  "course": "schooling" | "engineering" | "govt",
  "level": "Beginner" | "Intermediate" | "Expert",
  "query": "string"
}
```

**Response:**
```json
{
  "answer": "string",
  "sources": [
    {
      "source": "string (file path or reference)",
      "id": "string (chunk/section identifier)"
    }
  ]
}
```

### 4. POST `/api/study-plan` (Placeholder)
Generate personalized study plans.

**Request Payload:**
```json
{
  "userId": "string",
  "course": "string",
  "level": "string",
  "duration": "number (weeks)"
}
```

### 5. POST `/api/assessments` (Placeholder)
Generate assessments and practice questions.

**Request Payload:**
```json
{
  "userId": "string",
  "course": "string",
  "level": "string",
  "topic": "string (optional)"
}
```

## Getting Started

### Backend Setup (Python FastAPI)

1. Navigate to the server directory:
```bash
cd server
```

2. Create a virtual environment and install dependencies:
```bash
python -m venv env
env\Scripts\activate  # On Windows
# source env/bin/activate  # On Linux/Mac
pip install -r requirements.txt
```

3. Set up environment variables:
```bash
# Create .env file in server directory
MONGODB_URI=mongodb://localhost:27017
DATABASE_NAME=exprep
GROQ_API_KEY=your_groq_api_key
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_secret_key
```

4. Run the Python backend:
```bash
python main.py
```

The backend will start on http://localhost:5000

### Frontend Setup (React + Vite)

1. Install dependencies (from root directory):
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open http://localhost:5173 in your browser

The frontend will automatically proxy API requests to the Python backend running on port 5000.

## Project Structure

```
client/src/
├── components/
│   ├── ChatArea.tsx          # Message display area
│   ├── ChatHeader.tsx         # Course and level display
│   ├── ChatInput.tsx          # Message input with send
│   ├── ChatMessage.tsx        # Individual message bubble
│   ├── CourseCard.tsx         # Selectable course cards
│   ├── LevelSelector.tsx      # Difficulty level pills
│   ├── QuickActions.tsx       # Study plan/assessment buttons
│   ├── Sidebar.tsx            # Left navigation panel
│   └── UserAvatar.tsx         # User profile display
├── lib/
│   ├── api.ts                 # API client for Python backend
│   ├── queryClient.ts         # React Query configuration
│   └── utils.ts               # Utility functions
├── pages/
│   └── ExamAssist.tsx         # Main application page
└── App.tsx                    # Root component

server/
├── routes/
│   ├── auth.py                # Authentication endpoints
│   ├── rag.py                 # RAG query endpoints
│   ├── study_plans.py         # Study plan endpoints
│   └── assessments.py         # Assessment endpoints
├── main.py                    # FastAPI application
├── config.py                  # Configuration settings
├── database.py                # MongoDB connection
└── chromadb_client.py         # Vector database client
```

## Design Guidelines

The UI follows a dark-first design approach:
- **Background**: #0f1724 (deep navy-slate)
- **Cards**: Subtle white overlays (5-10% opacity)
- **Active States**: Indigo-purple gradients
- **Rounded Corners**: 2xl for modern feel
- **Typography**: Inter font family
- **Spacing**: Consistent padding (p-3, p-4, p-6)

## Next Steps

1. Implement backend API endpoints (POST /api/rag/query, etc.)
2. Connect OpenAI for RAG-powered responses
3. Add authentication flow
4. Build study plan generation
5. Create assessment/quiz functionality
6. Add chat history persistence