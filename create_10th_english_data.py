"""
Script to create the TypeScript data file for 10th English with separated content
"""

import json

# Read the extracted content
with open('d:/Exprep/english10_units_separated.json', 'r', encoding='utf-8') as f:
    units_content = json.load(f)

# Define the structure with proper topic names for 10th English
units_structure = [
    {
        'id': 'unit-1',
        'title': 'UNIT - 1',
        'topics': [
            {'id': 'prose-1', 'title': 'Prose - His First Flight', 'type': 'prose', 'content_key': 'prose'},
            {'id': 'poem-1', 'title': 'Poem - Life', 'type': 'poem', 'content_key': 'poem'},
            {'id': 'supplementary-1', 'title': 'Supplementary - The Tempest', 'type': 'supplementary', 'content_key': 'supplementary'}
        ]
    },
    {
        'id': 'unit-2',
        'title': 'UNIT - 2',
        'topics': [
            {'id': 'prose-2', 'title': 'Prose - The Night the Ghost Got In', 'type': 'prose', 'content_key': 'prose'},
            {'id': 'poem-2', 'title': 'Poem - The Grumble Family', 'type': 'poem', 'content_key': 'poem'},
            {'id': 'supplementary-2', 'title': 'Supplementary - Zigzag', 'type': 'supplementary', 'content_key': 'supplementary'}
        ]
    },
    {
        'id': 'unit-3',
        'title': 'UNIT - 3',
        'topics': [
            {'id': 'prose-3', 'title': 'Prose - Empowered Women Navigating the World', 'type': 'prose', 'content_key': 'prose'},
            {'id': 'poem-3', 'title': 'Poem - The Woman', 'type': 'poem', 'content_key': 'poem'},
            {'id': 'supplementary-3', 'title': 'Supplementary - Oru Manushyan', 'type': 'supplementary', 'content_key': 'supplementary'}
        ]
    },
    {
        'id': 'unit-4',
        'title': 'UNIT - 4',
        'topics': [
            {'id': 'prose-4', 'title': 'Prose - The Attic', 'type': 'prose', 'content_key': 'prose'},
            {'id': 'poem-4', 'title': 'Poem - The Cricket and the Ant', 'type': 'poem', 'content_key': 'poem'},
            {'id': 'supplementary-4', 'title': 'Supplementary - The Aged Mother', 'type': 'supplementary', 'content_key': 'supplementary'}
        ]
    },
    {
        'id': 'unit-5',
        'title': 'UNIT - 5',
        'topics': [
            {'id': 'prose-5', 'title': 'Prose - Tech Bloomers', 'type': 'prose', 'content_key': 'prose'},
            {'id': 'poem-5', 'title': 'Poem - The Secret of the Machines', 'type': 'poem', 'content_key': 'poem'},
            {'id': 'supplementary-5', 'title': 'Supplementary - The Future World in 2889', 'type': 'supplementary', 'content_key': 'supplementary'}
        ]
    },
    {
        'id': 'unit-6',
        'title': 'UNIT - 6',
        'topics': [
            {'id': 'prose-6', 'title': 'Prose - The Last Lesson', 'type': 'prose', 'content_key': 'prose'},
            {'id': 'poem-6', 'title': 'Poem - No Men Are Foreign', 'type': 'poem', 'content_key': 'poem'},
            {'id': 'supplementary-6', 'title': 'Supplementary - The Hero of Holland', 'type': 'supplementary', 'content_key': 'supplementary'}
        ]
    },
    {
        'id': 'unit-7',
        'title': 'UNIT - 7',
        'topics': [
            {'id': 'prose-7', 'title': 'Prose - The Dying Detective', 'type': 'prose', 'content_key': 'prose'},
            {'id': 'poem-7', 'title': 'Poem - The Solitary Reaper', 'type': 'poem', 'content_key': 'poem'},
            {'id': 'supplementary-7', 'title': 'Supplementary - The Little Hero of Holland', 'type': 'supplementary', 'content_key': 'supplementary'}
        ]
    }
]

# Create TypeScript content
ts_content = "export const english10Units = [\n"

for unit in units_structure:
    unit_id = unit['id']
    unit_sections = units_content.get(unit_id, {})
    
    ts_content += f"  {{\n"
    ts_content += f"    id: '{unit['id']}',\n"
    ts_content += f"    title: '{unit['title']}',\n"
    ts_content += f"    topics: [\n"
    
    for topic in unit['topics']:
        # Get the specific content for this topic type
        content = unit_sections.get(topic['content_key'], '')
        
        # Escape single quotes, backticks, and template literals
        escaped_content = content.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
        escaped_title = topic['title'].replace("'", "\\'")
        
        ts_content += f"      {{\n"
        ts_content += f"        id: '{topic['id']}',\n"
        ts_content += f"        title: '{escaped_title}',\n"
        ts_content += f"        type: '{topic['type']}',\n"
        ts_content += f"        content: `{escaped_content}`\n"
        ts_content += f"      }},\n"
    
    ts_content += f"    ]\n"
    ts_content += f"  }},\n"

ts_content += "];\n"

# Write to TypeScript file
with open('d:/Exprep/client/src/data/english10Topics.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("✅ TypeScript data file created successfully!")
print("📁 Location: d:/Exprep/client/src/data/english10Topics.ts")
print("🎉 All 7 units with separated Prose, Poem, and Supplementary content!")
