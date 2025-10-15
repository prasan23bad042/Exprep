# Exprep Development Guide

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Setup Instructions](#setup-instructions)
4. [Development Roadmap](#development-roadmap)
5. [API Implementation Guide](#api-implementation-guide)
6. [RAG System Setup](#rag-system-setup)
7. [Database Schema](#database-schema)
8. [Testing & Deployment](#testing--deployment)

---

## Project Overview

**Exprep** is an AI-powered exam preparation assistant that provides personalized study support through an intelligent chat interface.

### Target Audiences
- **Schooling**: Tamil Nadu 9th & 10th grade
- **Engineering**: Computer Science (COA/OS)
- **Government Exams**: SSC CGL

### Key Features
- Adaptive learning with 3 difficulty levels
- RAG-based AI responses with source citations
- Study plan generation
- Assessment and quiz functionality
- Modern dark-themed UI

---

## Architecture

### Tech Stack

**Frontend**
- React 18 + TypeScript
- Tailwind CSS
- TanStack Query
- Wouter (routing)
- Radix UI + shadcn/ui

**Backend** (Python)
- FastAPI (Python web framework)
- MongoDB + Motor (async driver)
- PyJWT + Passlib (authentication)
- Groq API (fast AI inference)
- OpenAI API (embeddings only)
- MongoDB Atlas Vector Search

### Project Structure
```
exprep/
├── client/src/
│   ├── components/       # UI components
│   ├── pages/            # Application pages
│   ├── hooks/            # Custom hooks
│   └── lib/              # Utilities
├── server/
│   ├── main.py           # FastAPI entry point
│   ├── config.py         # Configuration settings
│   ├── database.py       # MongoDB operations
│   ├── models.py         # Pydantic models
│   ├── routes/           # API route handlers
│   │   ├── auth.py       # Authentication
│   │   ├── rag.py        # RAG queries
│   │   ├── study_plans.py
│   │   └── assessments.py
│   ├── scripts/          # Utility scripts
│   └── requirements.txt  # Python dependencies
└── [config files]
```

---

## Setup Instructions

### Prerequisites
- Node.js 18+ (for frontend)
- Python 3.9+ (for backend)
- MongoDB (local or Atlas)
- Groq API key
- OpenAI API key (for embeddings)

### Installation

**Step 1: Frontend Setup**
```bash
# Install frontend dependencies
npm install
```

**Step 2: Python Backend Setup**
```bash
# Navigate to Python backend
cd server

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

**Step 3: Environment Configuration**
```bash
# Copy example env file
cp server/.env.example server/.env

# Edit .env with your credentials:
# MONGODB_URI=mongodb://localhost:27017  (or Atlas URI)
# GROQ_API_KEY=gsk_your_groq_key
# OPENAI_API_KEY=sk_your_openai_key
# JWT_SECRET=your_random_secret
```

**Step 4: Seed Knowledge Base**
```bash
# From server directory
python scripts/seed_knowledge.py
```

**Step 5: Start Servers**
```bash
# Terminal 1: Start Python backend
cd server
python main.py

# Terminal 2: Start frontend dev server (from root)
npm run dev
```

Application runs at `http://localhost:5000`

---

## Development Roadmap

### Phase 1: Backend Foundation (Week 1-2)

#### Authentication System
- [ ] User registration endpoint
- [ ] Login with Passport.js
- [ ] Session management
- [ ] Logout functionality

#### Database Extensions
- [ ] Chat sessions table
- [ ] Messages table
- [ ] Study plans table
- [ ] Assessments table

#### Basic Routes
- [ ] Health check
- [ ] User profile
- [ ] Error handling
- [ ] Request validation

### Phase 2: RAG Implementation (Week 3-4)

#### Knowledge Base
- [ ] Collect course materials
- [ ] Document chunking
- [ ] Vector embeddings
- [ ] Vector database setup
- [ ] Ingestion pipeline

#### RAG Endpoint
- [ ] Semantic search
- [ ] Context retrieval
- [ ] OpenAI integration
- [ ] Source citations
- [ ] Response streaming

#### Course Logic
- [ ] Course filtering
- [ ] Level-based responses
- [ ] Prompt templates
- [ ] Context management

### Phase 3: Features (Week 5-6)

#### Study Plans
- [ ] Plan generation
- [ ] Customization
- [ ] Progress tracking
- [ ] Visualization

#### Assessments
- [ ] Question generation
- [ ] Multiple types
- [ ] Scoring system
- [ ] Analytics

#### Chat History
- [ ] Message persistence
- [ ] Conversation threading
- [ ] Search functionality
- [ ] Export feature

### Phase 4: Polish (Week 7-8)

#### Performance
- [ ] Response caching
- [ ] Rate limiting
- [ ] Query optimization
- [ ] Lazy loading

#### UX Enhancements
- [ ] Loading states
- [ ] Error boundaries
- [ ] Toast notifications
- [ ] Mobile optimization

### Phase 5: Deployment (Week 9-10)

#### Testing
- [ ] Unit tests
- [ ] Integration tests
- [ ] E2E tests
- [ ] Load testing

#### Launch
- [ ] CI/CD pipeline
- [ ] Production deployment
- [ ] Monitoring setup

---

## API Implementation Guide

### Authentication Endpoints

#### POST `/api/auth/register`
Create new user account

**Request:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Implementation:**
```typescript
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, password } = insertUserSchema.parse(req.body);
    
    const existing = await storage.getUserByUsername(username);
    if (existing) {
      return res.status(400).json({ error: 'Username exists' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await storage.insertUser({ username, password: hashedPassword });
    
    res.json({ success: true, user: { id: user.id, username: user.username } });
  } catch (error) {
    res.status(400).json({ error: 'Registration failed' });
  }
});
```

#### POST `/api/auth/login`
Authenticate user

**Request:**
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
    "id": "uuid",
    "username": "string"
  }
}
```

#### GET `/api/user/session`
Get current user

**Response:**
```json
{
  "user": {
    "id": "uuid",
    "username": "string",
    "loggedIn": true
  }
}
```

### RAG Query Endpoint

#### POST `/api/rag/query`
Main chat endpoint

**Request:**
```json
{
  "userId": "uuid",
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
      "source": "filename.pdf",
      "id": "chunk_id"
    }
  ]
}
```

**Implementation Steps:**

1. **Validate Request**
```typescript
const querySchema = z.object({
  userId: z.string().uuid(),
  course: z.enum(['schooling', 'engineering', 'govt']),
  level: z.enum(['Beginner', 'Intermediate', 'Expert']),
  query: z.string().min(1).max(1000)
});
```

2. **Retrieve Context**
```typescript
// Embed query
const queryEmbedding = await openai.embeddings.create({
  model: "text-embedding-3-small",
  input: query
});

// Search vector DB
const relevantChunks = await vectorDB.search({
  vector: queryEmbedding.data[0].embedding,
  filter: { course, level },
  limit: 5
});
```

3. **Generate Response**
```typescript
const systemPrompt = `You are an exam prep assistant for ${course} at ${level} level.
Context: ${relevantChunks.map(c => c.content).join('\n\n')}`;

const completion = await openai.chat.completions.create({
  model: "gpt-4-turbo-preview",
  messages: [
    { role: "system", content: systemPrompt },
    { role: "user", content: query }
  ]
});

res.json({
  answer: completion.choices[0].message.content,
  sources: relevantChunks.map(c => ({ source: c.metadata.filename, id: c.id }))
});
```

### Study Plan Endpoint

#### POST `/api/study-plan`
Generate personalized study plan

**Request:**
```json
{
  "userId": "uuid",
  "course": "schooling",
  "level": "Intermediate",
  "duration": 8,
  "hoursPerDay": 2
}
```

**Response:**
```json
{
  "planId": "uuid",
  "weeks": [
    {
      "weekNumber": 1,
      "topics": ["Linear Equations"],
      "dailyTasks": [
        {
          "day": 1,
          "topic": "Introduction",
          "duration": 120,
          "resources": ["chapter_1.pdf"]
        }
      ]
    }
  ]
}
```

### Assessment Endpoint

#### POST `/api/assessments/generate`
Generate practice questions

**Request:**
```json
{
  "userId": "uuid",
  "course": "engineering",
  "topic": "Operating Systems",
  "questionCount": 10
}
```

---

## RAG System Setup

### Vector Database Options

#### Option 1: MongoDB Atlas Vector Search (Recommended)
Use MongoDB's built-in vector search capabilities

**Setup:**
1. Create MongoDB Atlas cluster (free tier available)
2. Create search index on `document_embeddings` collection:
```json
{
  "mappings": {
    "dynamic": true,
    "fields": {
      "embedding": {
        "type": "knnVector",
        "dimensions": 1536,
        "similarity": "cosine"
      },
      "course": { "type": "string" },
      "level": { "type": "string" }
    }
  }
}
```

**Advantages:**
- Single database for all data
- No additional service needed
- Built-in filtering support
- Free tier available

#### Option 2: Local MongoDB (Development)
For development without Atlas, the code includes fallback cosine similarity search

#### Option 3: Pinecone
Managed vector database service (requires separate account)

### Document Processing

#### 1. Content Organization
```
knowledge_base/
├── schooling/
│   ├── grade_9/
│   └── grade_10/
├── engineering/
│   ├── computer_organization/
│   └── operating_systems/
└── govt_exams/
    └── ssc_cgl/
```

#### 2. Chunking Strategy
```typescript
function chunkDocument(text: string, chunkSize = 500, overlap = 50): string[] {
  const chunks: string[] = [];
  let start = 0;
  
  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length);
    chunks.push(text.slice(start, end));
    start = end - overlap;
  }
  
  return chunks;
}
```

#### 3. Generate Embeddings
```python
from openai import OpenAI
from database import db

async def generate_embeddings(chunks: list):
    openai_client = OpenAI(api_key=settings.OPENAI_API_KEY)
    
    # Generate embeddings
    response = openai_client.embeddings.create(
        model="text-embedding-3-small",
        input=[chunk["content"] for chunk in chunks]
    )
    
    # Store in database
    for i, chunk in enumerate(chunks):
        await db.insert_embedding(
            course=chunk["course"],
            level=chunk["level"],
            content=chunk["content"],
            embedding=response.data[i].embedding,
            metadata=chunk["metadata"]
        )
```

**Use the provided seed script:**
```bash
cd server
python scripts/seed_knowledge.py
```

### Prompt Engineering

#### System Prompts by Course

**Schooling:**
```typescript
const schoolingPrompt = `You are a patient tutor for TN board students (grades 9-10).
- Explain clearly with real-world examples
- Use simple language
- Break down complex topics
- Encourage critical thinking`;
```

**Engineering:**
```typescript
const engineeringPrompt = `You are a CS educator specializing in COA and OS.
- Provide technically accurate explanations
- Include diagrams and pseudocode
- Reference standard textbooks
- Connect theory to practice`;
```

**Government Exams:**
```typescript
const govtExamPrompt = `You are an SSC CGL exam expert.
- Focus on exam-relevant information
- Provide memory techniques
- Include previous year patterns
- Emphasize time management`;
```

---

## Database Schema

### MongoDB Collections

**users**
```javascript
{
  _id: ObjectId,
  username: String (unique),
  password_hash: String,
  created_at: Date
}
```

**chat_sessions**
```javascript
{
  _id: ObjectId,
  user_id: ObjectId (ref: users),
  course: String,  // "schooling", "engineering", "govt"
  level: String,   // "Beginner", "Intermediate", "Expert"
  title: String,
  created_at: Date,
  updated_at: Date
}
```

**messages**
```javascript
{
  _id: ObjectId,
  session_id: ObjectId (ref: chat_sessions),
  role: String,  // "user" or "assistant"
  content: String,
  sources: Array,  // [{source: String, id: String, score: Number}]
  created_at: Date
}
```

**study_plans**
```javascript
{
  _id: ObjectId,
  user_id: ObjectId (ref: users),
  course: String,
  level: String,
  duration: Number,  // weeks
  plan_data: Object,  // Structured plan
  progress: Object,   // Completion tracking
  created_at: Date
}
```

**assessments**
```javascript
{
  _id: ObjectId,
  user_id: ObjectId (ref: users),
  course: String,
  level: String,
  topic: String,
  questions: Array,  // Question objects
  answers: Array,    // User answers
  score: Number,
  completed_at: Date,
  created_at: Date
}
```

**document_embeddings** (for RAG)
```javascript
{
  _id: ObjectId,
  course: String,
  level: String,
  content: String,
  embedding: Array[1536],  // Vector embedding
  metadata: Object,  // {filename, subject, chapter, etc.}
  created_at: Date
}
```

### Performance Indexes
Indexes are automatically created by `database.py`:
- `users.username` (unique)
- `chat_sessions.user_id, updated_at`
- `messages.session_id, created_at`
- `study_plans.user_id, created_at`
- `assessments.user_id, created_at`
- `document_embeddings.course, level`

---

## Testing & Deployment

### Testing Strategy

**Unit Tests** (Jest/Vitest)
- Utility functions
- Validation schemas
- Database queries

**Integration Tests** (Supertest)
- API endpoints
- Authentication flow
- RAG pipeline

**E2E Tests** (Playwright)
```typescript
test('chat flow', async ({ page }) => {
  await page.goto('http://localhost:5000');
  await page.fill('[name="username"]', 'testuser');
  await page.click('button[type="submit"]');
  await page.click('text=Schooling');
  await page.fill('[placeholder*="Ask"]', 'What is photosynthesis?');
  await page.click('button:has-text("Send")');
  await page.waitForSelector('text=Photosynthesis');
});
```

### Deployment

#### Environment Variables (Production)
```env
# Python Backend
PORT=5000
DEBUG=False
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/exprep
GROQ_API_KEY=gsk_prod_key
OPENAI_API_KEY=sk_prod_key
JWT_SECRET=64-char-random-string
ALLOWED_ORIGINS=https://yourdomain.com
```

#### Deployment Options

**Option 1: Railway** (Recommended)
```bash
# Deploy Python backend
cd server
railway login
railway init
railway up

# Frontend served by backend in production
```

**Option 2: Render**
- Create Web Service for Python backend
- Connect MongoDB Atlas
- Set environment variables
- Deploy from GitHub

**Option 3: DigitalOcean App Platform**
- Python app + MongoDB Atlas
- Auto-deploy from Git

**Option 4: AWS (EC2 + MongoDB Atlas)**
- Full control, requires more setup

#### Build Process
```bash
# Frontend build (if needed)
npm run build

# Python backend runs directly
cd server
uvicorn main:app --host 0.0.0.0 --port 5000
```

#### MongoDB Atlas Setup
1. Create free cluster at mongodb.com/atlas
2. Add database user
3. Whitelist IP addresses (0.0.0.0/0 for development)
4. Get connection string
5. Create vector search index on `document_embeddings`

### Monitoring

**Recommended Tools:**
- Error tracking: Sentry
- Performance: New Relic
- Logs: LogTail
- Uptime: UptimeRobot

---

## Security Best Practices

- Use bcrypt (salt rounds ≥ 10)
- Rate limit auth endpoints
- Secure session cookies (httpOnly, secure, sameSite)
- Validate all inputs with Zod
- Never expose OpenAI key to frontend
- Implement CSRF protection
- Use parameterized queries

---

## Performance Optimization

**Backend:**
- Redis caching
- Connection pooling
- Response compression
- CDN for static assets

**Frontend:**
- Code splitting
- Virtual scrolling
- Bundle optimization
- Service workers

**RAG:**
- Cache embeddings
- Semantic caching
- Batch operations
- Optimize chunk size

---

## Troubleshooting

### Common Issues

**Database Connection**
```bash
psql $DATABASE_URL  # Test connection
```

**OpenAI Errors**
- Rate limit: Implement backoff
- Token limit: Use gpt-3.5-turbo
- Invalid key: Check env vars

**Build Errors**
```bash
rm -rf node_modules dist
npm install
npm run build
```

---

## Resources

- [Drizzle ORM](https://orm.drizzle.team/)
- [OpenAI API](https://platform.openai.com/docs)
- [React Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## Maintenance Checklist

**Daily:**
- Monitor error logs
- Check API costs
- Review feedback

**Weekly:**
- Verify backups
- Review metrics
- Security updates

**Monthly:**
- Update dependencies
- Cost optimization
- Feature analysis
