# API Integration Guide

## Overview

The frontend React application communicates with the Python FastAPI backend through a centralized API client.

## Configuration

### Development Mode
- **Frontend**: Runs on `http://localhost:5173` (Vite dev server)
- **Backend**: Runs on `http://localhost:5000` (FastAPI)
- **Proxy**: Vite automatically proxies `/api/*` requests to the backend

### Production Mode
Set the `VITE_API_URL` environment variable to point to your production API:
```bash
VITE_API_URL=https://your-api-domain.com/api
```

## Using the API Client

### Import the API Client
```typescript
import { apiClient } from '@/lib/api';
```

### Available Methods

#### RAG Query
```typescript
const response = await apiClient.queryRAG({
  userId: 'user123',
  course: 'engineering',
  level: 'Intermediate',
  query: 'Explain process scheduling'
});
// Returns: { answer: string, sources: Array<{source?: string, id?: string}> }
```

#### Authentication
```typescript
// Register
await apiClient.register('email@example.com', 'password', 'John Doe');

// Login
await apiClient.login('email@example.com', 'password');

// Logout
await apiClient.logout();

// Get current user
const user = await apiClient.getCurrentUser();
```

#### Document Upload
```typescript
const file = document.querySelector('input[type="file"]').files[0];
await apiClient.uploadDocument(file, 'engineering', 'Intermediate');
```

#### Study Plans
```typescript
// Get study plans
const plans = await apiClient.getStudyPlans('user123');

// Create study plan
await apiClient.createStudyPlan({
  userId: 'user123',
  course: 'engineering',
  level: 'Intermediate',
  duration: 4 // weeks
});

// Update study plan
await apiClient.updateStudyPlan('plan123', { completed: true });
```

#### Assessments
```typescript
// Get assessments
const assessments = await apiClient.getAssessments('user123');

// Generate assessment
await apiClient.generateAssessment({
  userId: 'user123',
  course: 'engineering',
  level: 'Intermediate',
  numQuestions: 10
});

// Submit assessment
await apiClient.submitAssessment('assessment123', { 
  q1: 'answer1',
  q2: 'answer2'
});
```

#### Health Check
```typescript
const health = await apiClient.healthCheck();
console.log(health);
// Returns: { status, database, groq_api, chromadb_collections }
```

## Error Handling

All API methods throw errors with descriptive messages:

```typescript
try {
  const response = await apiClient.queryRAG({...});
} catch (error) {
  if (error instanceof Error) {
    console.error('API Error:', error.message);
    // error.message format: "API Error (status): error details"
  }
}
```

## CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:5000` (Backend itself)

To add more origins, update `ALLOWED_ORIGINS` in `server/config.py`:

```python
ALLOWED_ORIGINS: List[str] = [
    "http://localhost:5173",
    "http://localhost:5000",
    "https://your-production-domain.com"
]
```

## Vite Proxy Configuration

The proxy is configured in `vite.config.ts`:

```typescript
server: {
  proxy: {
    "/api": {
      target: "http://localhost:5000",
      changeOrigin: true,
      secure: false,
    },
  },
}
```

This means any request to `/api/*` from the frontend will be forwarded to `http://localhost:5000/api/*`.

## Testing the Connection

1. Start the backend:
```bash
cd server
python main.py
```

2. Start the frontend:
```bash
npm run dev
```

3. Open browser console and test:
```javascript
// In browser console
fetch('/api/health')
  .then(r => r.json())
  .then(console.log);
```

You should see the health check response from the Python backend.
