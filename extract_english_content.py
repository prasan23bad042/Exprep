"""
Script to extract content from 9th English unit text files
and create a TypeScript data file
"""

import json
import re
from html import escape

def text_to_html(text):
    """Convert plain text to HTML with proper formatting"""
    lines = text.split('\n')
    html_parts = []
    in_list = False
    
    for line in lines:
        line = line.strip()
        
        if not line:
            if in_list:
                html_parts.append('</ul>\n')
                in_list = False
            html_parts.append('<br/>\n')
            continue
        
        # Check if it's a heading (all caps or starts with "Unit")
        if line.isupper() or line.startswith('UNIT') or line.startswith('Unit'):
            if in_list:
                html_parts.append('</ul>\n')
                in_list = False
            html_parts.append(f'<h2 class="font-bold text-xl mt-4 mb-2">{escape(line)}</h2>\n')
        
        # Check if it's a subheading (ends with colon or is bold-like)
        elif line.endswith(':') and len(line) < 100:
            if in_list:
                html_parts.append('</ul>\n')
                in_list = False
            html_parts.append(f'<h3 class="font-semibold text-lg mt-3 mb-2">{escape(line)}</h3>\n')
        
        # Check if it's a list item (starts with -, •, *, or number.)
        elif re.match(r'^[\-•*]\s+', line) or re.match(r'^\d+\.\s+', line):
            if not in_list:
                html_parts.append('<ul class="list-disc list-inside ml-4 mb-2">\n')
                in_list = True
            # Remove the bullet/number
            clean_line = re.sub(r'^[\-•*]\s+', '', line)
            clean_line = re.sub(r'^\d+\.\s+', '', clean_line)
            html_parts.append(f'  <li class="mb-1">{escape(clean_line)}</li>\n')
        
        # Regular paragraph
        else:
            if in_list:
                html_parts.append('</ul>\n')
                in_list = False
            
            # Check for bold text (text between ** or __)
            formatted_line = escape(line)
            formatted_line = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', formatted_line)
            formatted_line = re.sub(r'__(.*?)__', r'<strong>\1</strong>', formatted_line)
            
            # Check for italic text (text between * or _)
            formatted_line = re.sub(r'\*(.*?)\*', r'<em>\1</em>', formatted_line)
            formatted_line = re.sub(r'_(.*?)_', r'<em>\1</em>', formatted_line)
            
            html_parts.append(f'<p class="mb-2">{formatted_line}</p>\n')
    
    if in_list:
        html_parts.append('</ul>\n')
    
    return ''.join(html_parts)

# Process all units
units_data = {}

for i in range(1, 8):
    unit_file = f'd:/Exprep/9th English/english unit {i} - summary.txt'
    
    try:
        print(f'Processing Unit {i}...')
        with open(unit_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        html_content = text_to_html(content)
        units_data[f'unit-{i}'] = html_content
        print(f'Unit {i} processed successfully!')
    except Exception as e:
        print(f'Error processing Unit {i}: {str(e)}')

# Save to JSON file
with open('d:/Exprep/english_units_content.json', 'w', encoding='utf-8') as f:
    json.dump(units_data, f, ensure_ascii=False, indent=2)

print('\n✅ All units processed! Content saved to english_units_content.json')
