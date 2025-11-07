"""
Script to create the TypeScript data file for 9th English with separated content
"""

import json

# Read the extracted content
with open('d:/Exprep/english_units_separated.json', 'r', encoding='utf-8') as f:
    units_content = json.load(f)

# Define the structure
units_structure = [
    {
        'id': 'unit-1',
        'title': 'UNIT - 1',
        'topics': [
            {'id': 'prose-1', 'title': 'Prose - Learning the Game', 'type': 'prose', 'content_key': 'prose'},
            {'id': 'poem-1', 'title': 'Poem - Stopping by Woods on a Snowy Evening', 'type': 'poem', 'content_key': 'poem'},
            {'id': 'supplementary-1', 'title': 'Supplementary - The Envious Neighbour', 'type': 'supplementary', 'content_key': 'supplementary'}
        ]
    },
    {
        'id': 'unit-2',
        'title': 'UNIT - 2',
        'topics': [
            {'id': 'prose-2', 'title': "Prose - I Can't Climb Trees Anymore", 'type': 'prose', 'content_key': 'prose'},
            {'id': 'poem-2', 'title': 'Poem - A Poison Tree', 'type': 'poem', 'content_key': 'poem'},
            {'id': 'supplementary-2', 'title': 'Supplementary - The Fun They Had', 'type': 'supplementary', 'content_key': 'supplementary'}
        ]
    },
    {
        'id': 'unit-3',
        'title': 'UNIT - 3',
        'topics': [
            {'id': 'prose-3', 'title': 'Prose - Drama Old Man River', 'type': 'prose', 'content_key': 'prose'},
            {'id': 'poem-3', 'title': 'Poem - On Killing a Tree', 'type': 'poem', 'content_key': 'poem'},
            {'id': 'supplementary-3', 'title': 'Supplementary - Earthquake', 'type': 'supplementary', 'content_key': 'supplementary'}
        ]
    },
    {
        'id': 'unit-4',
        'title': 'UNIT - 4',
        'topics': [
            {'id': 'prose-4', 'title': 'Prose - Seventeen Oranges', 'type': 'prose', 'content_key': 'prose'},
            {'id': 'poem-4', 'title': 'Poem - The Spider and the Fly', 'type': 'poem', 'content_key': 'poem'},
            {'id': 'supplementary-4', 'title': 'Supplementary - The Cat and the Painkiller', 'type': 'supplementary', 'content_key': 'supplementary'}
        ]
    },
    {
        'id': 'unit-5',
        'title': 'UNIT - 5',
        'topics': [
            {'id': 'prose-5', 'title': 'Prose - Water–The Elixir of Life', 'type': 'prose', 'content_key': 'prose'},
            {'id': 'poem-5', 'title': 'Poem - The River', 'type': 'poem', 'content_key': 'poem'},
            {'id': 'supplementary-5', 'title': 'Supplementary - Little Cyclone: The Story of a Grizzly Cub', 'type': 'supplementary', 'content_key': 'supplementary'}
        ]
    },
    {
        'id': 'unit-6',
        'title': 'UNIT - 6',
        'topics': [
            {'id': 'prose-6', 'title': 'Prose - From Zero to Infinity', 'type': 'prose', 'content_key': 'prose'},
            {'id': 'poem-6', 'title': 'Poem - The Comet', 'type': 'poem', 'content_key': 'poem'},
            {'id': 'supplementary-6', 'title': "Supplementary - Mother's Voice", 'type': 'supplementary', 'content_key': 'supplementary'}
        ]
    },
    {
        'id': 'unit-7',
        'title': 'UNIT - 7',
        'topics': [
            {'id': 'prose-7', 'title': 'Prose - A Birthday Letter', 'type': 'prose', 'content_key': 'prose'},
            {'id': 'poem-7', 'title': 'Poem - The Stick-together Families', 'type': 'poem', 'content_key': 'poem'},
            {'id': 'supplementary-7', 'title': 'Supplementary - The Christmas Truce', 'type': 'supplementary', 'content_key': 'supplementary'}
        ]
    }
]

# Create TypeScript content
ts_content = "export const english9Units = [\n"

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
with open('d:/Exprep/client/src/data/english9Topics.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("✅ TypeScript data file created successfully!")
print("📁 Location: d:/Exprep/client/src/data/english9Topics.ts")
print("🎉 All 7 units with separated Prose, Poem, and Supplementary content!")
