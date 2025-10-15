# Exprep Python Backend

FastAPI backend for the Exprep exam preparation assistant.

## Features

- **Authentication**: JWT-based auth with bcrypt password hashing
- **RAG System**: Groq AI + OpenAI embeddings + MongoDB vector search
- **Study Plans**: AI-generated personalized study schedules
- **Assessments**: Automated question generation and scoring
- **MongoDB**: Flexible document storage with vector search

## Quick Start

### 1. Setup Environment

```bash
# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (Linux/Mac)
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in:

```env
MONGODB_URI=mongodb://localhost:27017
GROQ_API_KEY=your_groq_key
OPENAI_API_KEY=your_openai_key
JWT_SECRET=your_secret_key
```

### 3. Seed Knowledge Base

```bash
python scripts/seed_knowledge.py
```

### 4. Run Server

```bash
python main.py
```

Server runs on `http://localhost:5000`

## API Documentation

Once running, visit:
- **Interactive Docs**: http://localhost:5000/docs
- **ReDoc**: http://localhost:5000/redoc

## Project Structure

```
server-python/
├── main.py              # FastAPI application
├── config.py            # Configuration settings
├── database.py          # MongoDB operations
├── models.py            # Pydantic models
├── routes/
│   ├── auth.py          # Authentication endpoints
│   ├── rag.py           # RAG query system
│   ├── study_plans.py   # Study plan generation
│   └── assessments.py   # Assessment generation
└── scripts/
    ├── seed_knowledge.py
    └── test_api.py
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/session` - Get current session

### RAG
- `POST /api/rag/query` - Query with AI response
- `GET /api/rag/sessions/{user_id}` - Get chat sessions
- `GET /api/rag/sessions/{session_id}/messages` - Get messages

### Study Plans
- `POST /api/study-plans/generate` - Generate study plan
- `GET /api/study-plans/{user_id}` - Get user's plans

### Assessments
- `POST /api/assessments/generate` - Generate assessment
- `POST /api/assessments/submit` - Submit answers
- `GET /api/assessments/{user_id}` - Get user's assessments

## Testing

```bash
# Run test script
python scripts/test_api.py

# Manual testing
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","password":"test123456"}'
```

## MongoDB Setup

### Local MongoDB
```bash
# Install MongoDB Community Edition
# Start MongoDB service
# Default URI: mongodb://localhost:27017
```

### MongoDB Atlas (Cloud)
1. Create free cluster at mongodb.com/atlas
2. Create database user
3. Whitelist IP (0.0.0.0/0 for dev)
4. Get connection string
5. Update MONGODB_URI in .env

### Vector Search Index
For optimal performance, create a vector search index:

```json
{
  "mappings": {
    "dynamic": true,
    "fields": {
      "embedding": {
        "type": "knnVector",
        "dimensions": 1536,
        "similarity": "cosine"
      }
    }
  }
}
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `GROQ_API_KEY` | Groq API key | Yes |
| `OPENAI_API_KEY` | OpenAI API key (embeddings) | Yes |
| `JWT_SECRET` | JWT signing secret | Yes |
| `PORT` | Server port | No (default: 5000) |
| `DEBUG` | Debug mode | No (default: True) |
| `GROQ_MODEL` | Groq model name | No (default: llama-3.1-70b-versatile) |
| `EMBEDDING_MODEL` | OpenAI embedding model | No (default: text-embedding-3-small) |

## Development

### Adding New Routes

1. Create route file in `routes/`
2. Define Pydantic models in `models.py`
3. Add database operations in `database.py`
4. Include router in `main.py`

### Adding Course Content

1. Prepare documents in text format
2. Add to `scripts/seed_knowledge.py`
3. Run seed script to generate embeddings

## Deployment

### Railway
```bash
railway login
railway init
railway up
```

### Render
1. Connect GitHub repository
2. Set environment variables
3. Deploy

### Docker (Optional)
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5000"]
```

## Troubleshooting

**Import errors**: Ensure virtual environment is activated

**MongoDB connection**: Check MONGODB_URI and MongoDB service status

**API key errors**: Verify keys in .env file

**No embeddings**: Run `python scripts/seed_knowledge.py`

## License

MIT
