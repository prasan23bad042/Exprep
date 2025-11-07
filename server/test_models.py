"""
Test script to verify camelCase support in Pydantic models
"""
import numpy 
import matplotlib
import json
from models import RAGQueryRequest, RAGQueryResponse, SourceCitation

# Test 1: RAGQueryRequest with camelCase input
print("Test 1: RAGQueryRequest with camelCase input")
test_data = {
    "userId": "anon",
    "course": "engineering",
    "level": "Beginner",
    "query": "define deadlock?"
}

try:
    request = RAGQueryRequest(**test_data)
    print(f"✓ Successfully parsed: user_id={request.user_id}, course={request.course}")
    print(f"  Internal representation: {request.model_dump()}")
    print(f"  JSON with aliases: {request.model_dump(by_alias=True)}")
except Exception as e:
    print(f"✗ Failed: {e}")

print("\n" + "="*60 + "\n")

# Test 2: RAGQueryResponse serialization to camelCase
print("Test 2: RAGQueryResponse serialization to camelCase")
try:
    sources = [
        SourceCitation(source="textbook.pdf", id="123", score=0.95)
    ]
    response = RAGQueryResponse(
        answer="Deadlock is a situation...",
        sources=sources,
        session_id="session123"
    )
    
    # This should output camelCase
    json_output = response.model_dump(by_alias=True)
    print(f"✓ Response serialized:")
    print(f"  {json.dumps(json_output, indent=2)}")
    
    # Verify sessionId is in output (not session_id)
    if "sessionId" in json_output:
        print(f"✓ camelCase confirmed: 'sessionId' found in output")
    else:
        print(f"✗ snake_case still present: 'session_id' found instead")
        
except Exception as e:
    print(f"✗ Failed: {e}")

print("\n" + "="*60 + "\n")

# Test 3: Both snake_case and camelCase should work for input
print("Test 3: Both snake_case and camelCase input should work")
test_cases = [
    {"userId": "user1", "course": "engineering", "level": "Beginner", "query": "test"},
    {"user_id": "user2", "course": "schooling", "level": "Intermediate", "query": "test2"}
]

for i, test_case in enumerate(test_cases, 1):
    try:
        request = RAGQueryRequest(**test_case)
        print(f"✓ Test case {i} passed: {list(test_case.keys())[0]}")
    except Exception as e:
        print(f"✗ Test case {i} failed: {e}")

print("\n✓ All tests completed!")
