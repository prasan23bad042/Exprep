"""
Script to create the TypeScript data file from extracted JSON content
"""

import json

# Read the extracted content
with open('d:/Exprep/maths_units_content.json', 'r', encoding='utf-8') as f:
    units_content = json.load(f)

# Define the structure with proper titles and topics
units_structure = [
    {
        'id': 'unit-1',
        'title': 'Unit 1 - Sets',
        'topics': [
            {'id': 'sets-intro', 'title': 'Introduction to Sets'},
            {'id': 'types-of-sets', 'title': 'Types of Sets'},
            {'id': 'set-operations', 'title': 'Set Operations'},
            {'id': 'venn-diagrams', 'title': 'Venn Diagrams'}
        ]
    },
    {
        'id': 'unit-2',
        'title': 'Unit 2 - Real Numbers',
        'topics': [
            {'id': 'number-system', 'title': 'Number System'},
            {'id': 'rational-numbers', 'title': 'Rational Numbers'},
            {'id': 'irrational-numbers', 'title': 'Irrational Numbers'},
            {'id': 'real-number-operations', 'title': 'Operations on Real Numbers'}
        ]
    },
    {
        'id': 'unit-3',
        'title': 'Unit 3 - Algebra',
        'topics': [
            {'id': 'algebraic-expressions', 'title': 'Algebraic Expressions'},
            {'id': 'polynomials', 'title': 'Polynomials'},
            {'id': 'factorization', 'title': 'Factorization'},
            {'id': 'algebraic-identities', 'title': 'Algebraic Identities'}
        ]
    },
    {
        'id': 'unit-4',
        'title': 'Unit 4 - Geometry',
        'topics': [
            {'id': 'lines-angles', 'title': 'Lines and Angles'},
            {'id': 'triangles', 'title': 'Triangles'},
            {'id': 'congruence', 'title': 'Congruence of Triangles'},
            {'id': 'geometric-constructions', 'title': 'Geometric Constructions'}
        ]
    },
    {
        'id': 'unit-5',
        'title': 'Unit 5 - Coordinate Geometry',
        'topics': [
            {'id': 'cartesian-plane', 'title': 'Cartesian Plane'},
            {'id': 'plotting-points', 'title': 'Plotting Points'},
            {'id': 'distance-formula', 'title': 'Distance Formula'},
            {'id': 'section-formula', 'title': 'Section Formula'}
        ]
    },
    {
        'id': 'unit-6',
        'title': 'Unit 6 - Trigonometry',
        'topics': [
            {'id': 'trigonometric-ratios', 'title': 'Trigonometric Ratios'},
            {'id': 'trigonometric-identities', 'title': 'Trigonometric Identities'},
            {'id': 'heights-distances', 'title': 'Heights and Distances'},
            {'id': 'complementary-angles', 'title': 'Complementary Angles'}
        ]
    },
    {
        'id': 'unit-7',
        'title': 'Unit 7 - Mensuration',
        'topics': [
            {'id': '2d-shapes', 'title': '2D Shapes - Area and Perimeter'},
            {'id': '3d-shapes', 'title': '3D Shapes - Surface Area'},
            {'id': 'volume', 'title': 'Volume of Solids'},
            {'id': 'combined-shapes', 'title': 'Combined Shapes'}
        ]
    },
    {
        'id': 'unit-8',
        'title': 'Unit 8 - Quadrilaterals',
        'topics': [
            {'id': 'types-quadrilaterals', 'title': 'Types of Quadrilaterals'},
            {'id': 'properties', 'title': 'Properties of Quadrilaterals'},
            {'id': 'theorems', 'title': 'Theorems on Quadrilaterals'},
            {'id': 'area-quadrilaterals', 'title': 'Area of Quadrilaterals'}
        ]
    },
    {
        'id': 'unit-9',
        'title': 'Unit 9 - Circles',
        'topics': [
            {'id': 'circle-basics', 'title': 'Circle Basics'},
            {'id': 'chord-properties', 'title': 'Chord Properties'},
            {'id': 'tangent-properties', 'title': 'Tangent Properties'},
            {'id': 'circle-theorems', 'title': 'Circle Theorems'}
        ]
    },
    {
        'id': 'unit-10',
        'title': 'Unit 10 - Constructions',
        'topics': [
            {'id': 'basic-constructions', 'title': 'Basic Constructions'},
            {'id': 'triangle-constructions', 'title': 'Triangle Constructions'},
            {'id': 'angle-bisectors', 'title': 'Angle Bisectors'},
            {'id': 'perpendiculars', 'title': 'Perpendiculars'}
        ]
    }
]

# Create TypeScript content
ts_content = "export const maths9Units = [\n"

for unit in units_structure:
    unit_id = unit['id']
    unit_content = units_content.get(unit_id, '')
    
    ts_content += f"  {{\n"
    ts_content += f"    id: '{unit['id']}',\n"
    ts_content += f"    title: '{unit['title']}',\n"
    ts_content += f"    topics: [\n"
    
    for topic in unit['topics']:
        # Escape single quotes and backticks in content
        escaped_content = unit_content.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
        
        ts_content += f"      {{\n"
        ts_content += f"        id: '{topic['id']}',\n"
        ts_content += f"        title: '{topic['title']}',\n"
        ts_content += f"        content: `{escaped_content}`\n"
        ts_content += f"      }},\n"
    
    ts_content += f"    ]\n"
    ts_content += f"  }},\n"

ts_content += "];\n"

# Write to TypeScript file
with open('d:/Exprep/client/src/data/maths9Topics.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("✅ TypeScript data file created successfully!")
print("📁 Location: d:/Exprep/client/src/data/maths9Topics.ts")
print("🎉 All 10 units with content have been populated!")
