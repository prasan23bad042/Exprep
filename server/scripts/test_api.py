"""
Script to test API endpoints
"""
import requests
import json

BASE_URL = "http://localhost:5000"

def test_health():
    """Test health check"""
    print("\n🔍 Testing health check...")
    response = requests.get(f"{BASE_URL}/api/health")
    print(f"Status: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2)}")
    return response.status_code == 200

def test_register():
    """Test user registration"""
    print("\n🔍 Testing user registration...")
    data = {
        "username": "testuser",
        "password": "test123456"
    }
    response = requests.post(f"{BASE_URL}/api/auth/register", json=data)
    print(f"Status: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2)}")
    
    if response.status_code in [200, 201]:
        return response.json()
    return None

def test_login():
    """Test user login"""
    print("\n🔍 Testing user login...")
    data = {
        "username": "testuser",
        "password": "test123456"
    }
    response = requests.post(f"{BASE_URL}/api/auth/login", json=data)
    print(f"Status: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2)}")
    
    if response.status_code == 200:
        return response.json()
    return None

def test_rag_query(user_id, token):
    """Test RAG query"""
    print("\n🔍 Testing RAG query...")
    data = {
        "user_id": user_id,
        "course": "schooling",
        "level": "Beginner",
        "query": "What is photosynthesis?"
    }
    headers = {"Authorization": f"Bearer {token}"}
    response = requests.post(f"{BASE_URL}/api/rag/query", json=data, headers=headers)
    print(f"Status: {response.status_code}")
    
    if response.status_code == 200:
        result = response.json()
        print(f"\n📝 Answer: {result['answer'][:200]}...")
        print(f"\n📚 Sources: {len(result['sources'])} found")
        for source in result['sources']:
            print(f"  - {source['source']} (score: {source.get('score', 'N/A')})")
    else:
        print(f"Response: {response.text}")

def test_study_plan(user_id, token):
    """Test study plan generation"""
    print("\n🔍 Testing study plan generation...")
    data = {
        "user_id": user_id,
        "course": "engineering",
        "level": "Intermediate",
        "duration": 4,
        "hours_per_day": 2
    }
    headers = {"Authorization": f"Bearer {token}"}
    response = requests.post(f"{BASE_URL}/api/study-plans/generate", json=data, headers=headers)
    print(f"Status: {response.status_code}")
    
    if response.status_code == 200:
        result = response.json()
        print(f"\n📅 Plan ID: {result['plan_id']}")
        print(f"📚 Duration: {result['duration']} weeks")
        print(f"📊 Weeks planned: {len(result['weeks'])}")
    else:
        print(f"Response: {response.text}")

def test_assessment(user_id, token):
    """Test assessment generation"""
    print("\n🔍 Testing assessment generation...")
    data = {
        "user_id": user_id,
        "course": "schooling",
        "level": "Beginner",
        "topic": "Photosynthesis",
        "question_count": 5
    }
    headers = {"Authorization": f"Bearer {token}"}
    response = requests.post(f"{BASE_URL}/api/assessments/generate", json=data, headers=headers)
    print(f"Status: {response.status_code}")
    
    if response.status_code == 200:
        result = response.json()
        print(f"\n📝 Assessment ID: {result['assessment_id']}")
        print(f"❓ Questions: {len(result['questions'])}")
        print(f"💯 Total marks: {result['total_marks']}")
    else:
        print(f"Response: {response.text}")

def main():
    """Run all tests"""
    print("=" * 60)
    print("🧪 API Testing Suite")
    print("=" * 60)
    
    # Test health
    if not test_health():
        print("\n❌ Server is not running or health check failed!")
        return
    
    # Test registration
    register_result = test_register()
    if not register_result:
        print("\n⚠️  Registration failed, trying login...")
        login_result = test_login()
        if not login_result:
            print("\n❌ Both registration and login failed!")
            return
        user_id = login_result["user"]["id"]
        token = login_result["access_token"]
    else:
        user_id = register_result["user"]["id"]
        token = register_result["access_token"]
    
    print(f"\n✅ Authenticated as user: {user_id}")
    
    # Test RAG query
    test_rag_query(user_id, token)
    
    # Test study plan (optional - takes longer)
    # test_study_plan(user_id, token)
    
    # Test assessment (optional - takes longer)
    # test_assessment(user_id, token)
    
    print("\n" + "=" * 60)
    print("✅ Testing complete!")
    print("=" * 60)

if __name__ == "__main__":
    main()
