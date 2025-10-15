"""
Script to seed knowledge base with sample documents
"""
import asyncio
import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from openai import OpenAI
from database import Database
from config import settings

# Sample documents for testing
SAMPLE_DOCUMENTS = [
    # Schooling - Science
    {
        "course": "schooling",
        "level": "Beginner",
        "content": """Photosynthesis is the process by which green plants make their own food. 
        Plants use sunlight, water from the soil, and carbon dioxide from the air to produce glucose (sugar) and oxygen. 
        The green pigment chlorophyll in leaves captures sunlight energy. 
        The equation is: 6CO2 + 6H2O + Light Energy → C6H12O6 + 6O2""",
        "metadata": {
            "filename": "biology_grade9_chapter3.txt",
            "subject": "Biology",
            "chapter": "Plant Physiology",
            "grade": 9
        }
    },
    {
        "course": "schooling",
        "level": "Intermediate",
        "content": """The cell is the basic structural and functional unit of life. 
        Animal cells and plant cells have similarities and differences. 
        Both contain nucleus, cytoplasm, cell membrane, mitochondria, and ribosomes. 
        Plant cells additionally have cell wall, chloroplasts, and large vacuoles. 
        The nucleus contains genetic material (DNA) that controls cell activities.""",
        "metadata": {
            "filename": "biology_grade10_chapter1.txt",
            "subject": "Biology",
            "chapter": "Cell Biology",
            "grade": 10
        }
    },
    
    # Schooling - Mathematics
    {
        "course": "schooling",
        "level": "Beginner",
        "content": """Linear equations in one variable have the form ax + b = 0, where a ≠ 0.
        To solve: 1) Isolate the variable term, 2) Divide by the coefficient.
        Example: 3x + 6 = 15
        Step 1: 3x = 15 - 6 = 9
        Step 2: x = 9/3 = 3""",
        "metadata": {
            "filename": "math_grade9_algebra.txt",
            "subject": "Mathematics",
            "chapter": "Linear Equations",
            "grade": 9
        }
    },
    
    # Engineering - Computer Organization
    {
        "course": "engineering",
        "level": "Intermediate",
        "content": """Computer Organization: The CPU (Central Processing Unit) consists of three main components:
        1. ALU (Arithmetic Logic Unit) - performs arithmetic and logical operations
        2. Control Unit - coordinates and controls all computer operations
        3. Registers - small, fast storage locations within the CPU
        The CPU executes instructions in the fetch-decode-execute cycle.""",
        "metadata": {
            "filename": "coa_chapter1_cpu_architecture.txt",
            "subject": "Computer Organization",
            "chapter": "CPU Architecture",
            "topic": "Processor Components"
        }
    },
    {
        "course": "engineering",
        "level": "Expert",
        "content": """Cache Memory Hierarchy: Modern processors use multiple levels of cache (L1, L2, L3).
        L1 cache is smallest (32-64KB) but fastest, located on the processor core.
        L2 cache is larger (256KB-512KB), slightly slower, may be per-core or shared.
        L3 cache is largest (2-32MB), shared among all cores.
        Cache hit ratio = (Cache hits) / (Cache hits + Cache misses)
        Effective access time = Hit ratio × Cache access time + Miss ratio × Memory access time""",
        "metadata": {
            "filename": "coa_chapter3_memory_hierarchy.txt",
            "subject": "Computer Organization",
            "chapter": "Memory Hierarchy",
            "topic": "Cache Memory"
        }
    },
    
    # Engineering - Operating Systems
    {
        "course": "engineering",
        "level": "Intermediate",
        "content": """Process vs Thread:
        Process: An independent program in execution with its own memory space.
        Thread: A lightweight process, multiple threads share the same memory space within a process.
        Advantages of threads: Lower overhead, faster context switching, efficient communication.
        Process states: New, Ready, Running, Waiting, Terminated.""",
        "metadata": {
            "filename": "os_chapter2_processes.txt",
            "subject": "Operating Systems",
            "chapter": "Process Management",
            "topic": "Processes and Threads"
        }
    },
    {
        "course": "engineering",
        "level": "Expert",
        "content": """Deadlock: A situation where processes wait indefinitely for resources held by each other.
        Four necessary conditions (Coffman conditions):
        1. Mutual Exclusion - resources cannot be shared
        2. Hold and Wait - process holds resources while waiting for others
        3. No Preemption - resources cannot be forcibly taken
        4. Circular Wait - circular chain of processes waiting for resources
        Prevention: Break at least one condition. Detection: Use resource allocation graphs.""",
        "metadata": {
            "filename": "os_chapter4_deadlock.txt",
            "subject": "Operating Systems",
            "chapter": "Deadlock",
            "topic": "Deadlock Conditions and Prevention"
        }
    },
    
    # Government Exams - Reasoning
    {
        "course": "govt",
        "level": "Beginner",
        "content": """Blood Relations: Understanding family relationships is key.
        Basic relations: Father, Mother, Son, Daughter, Brother, Sister
        Extended: Uncle (father's/mother's brother), Aunt (father's/mother's sister)
        Grandfather (father's/mother's father), Grandmother (father's/mother's mother)
        Tip: Draw a family tree diagram to solve complex problems quickly.""",
        "metadata": {
            "filename": "ssc_reasoning_blood_relations.txt",
            "subject": "Reasoning",
            "chapter": "Blood Relations",
            "exam": "SSC CGL"
        }
    },
    
    # Government Exams - Quantitative Aptitude
    {
        "course": "govt",
        "level": "Intermediate",
        "content": """Percentage: A fraction with denominator 100.
        Key formulas:
        - Percentage = (Value/Total) × 100
        - Increase% = [(New - Old)/Old] × 100
        - Decrease% = [(Old - New)/Old] × 100
        Quick trick: To find x% of y, calculate (x × y)/100
        Common conversions: 1/2 = 50%, 1/4 = 25%, 1/5 = 20%, 1/10 = 10%""",
        "metadata": {
            "filename": "ssc_quant_percentage.txt",
            "subject": "Quantitative Aptitude",
            "chapter": "Percentage",
            "exam": "SSC CGL"
        }
    }
]

async def seed_knowledge_base():
    """Seed the knowledge base with sample documents"""
    print("🌱 Starting knowledge base seeding...")
    
    # Initialize clients
    openai_client = OpenAI(api_key=settings.OPENAI_API_KEY)
    db = Database()
    
    try:
        # Connect to database
        await db.connect()
        print("✓ Connected to MongoDB")
        
        # Check if embeddings already exist
        count = await db.db.document_embeddings.count_documents({})
        if count > 0:
            response = input(f"⚠️  Found {count} existing embeddings. Delete and reseed? (yes/no): ")
            if response.lower() == 'yes':
                await db.db.document_embeddings.delete_many({})
                print("✓ Cleared existing embeddings")
            else:
                print("❌ Seeding cancelled")
                return
        
        # Process each document
        print(f"\n📚 Processing {len(SAMPLE_DOCUMENTS)} documents...")
        
        for i, doc in enumerate(SAMPLE_DOCUMENTS, 1):
            print(f"\n[{i}/{len(SAMPLE_DOCUMENTS)}] Processing: {doc['metadata'].get('filename', 'Unknown')}")
            
            # Generate embedding
            print("  → Generating embedding...")
            response = openai_client.embeddings.create(
                model=settings.EMBEDDING_MODEL,
                input=doc["content"]
            )
            embedding = response.data[0].embedding
            
            # Insert into database
            print("  → Saving to database...")
            await db.insert_embedding(
                course=doc["course"],
                level=doc["level"],
                content=doc["content"],
                embedding=embedding,
                metadata=doc["metadata"]
            )
            
            print(f"  ✓ Completed")
        
        # Summary
        final_count = await db.db.document_embeddings.count_documents({})
        print(f"\n✅ Knowledge base seeded successfully!")
        print(f"📊 Total embeddings in database: {final_count}")
        
        # Show distribution
        print("\n📈 Distribution by course:")
        for course in ["schooling", "engineering", "govt"]:
            count = await db.db.document_embeddings.count_documents({"course": course})
            print(f"  - {course.title()}: {count} documents")
        
    except Exception as e:
        print(f"\n❌ Error: {str(e)}")
        raise
    finally:
        await db.disconnect()
        print("\n👋 Disconnected from MongoDB")

if __name__ == "__main__":
    asyncio.run(seed_knowledge_base())
