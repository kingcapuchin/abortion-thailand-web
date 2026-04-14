#!/usr/bin/env python3
import textwrap

# Helper to escape content for TypeScript template literal
def escape_ts(s):
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

# Article data structure
articles_th = [
    {
        'slug': 'what-to-expect-medication-abortion',
        'title': 'ยาทำแท้งเต็มๆ วิธี: ตั้งแต่กินยาตัวแรกจนเจอผล (เล่าจริงๆ ไม่ใช่สรุปทฤษฎี)',
        'excerpt': 'ยาทำแท้ง 2 ชนิดที่หมอในไทยใช้กัน มีประสิทธิภาพสูงมากแต่ต้องรู้ขั้นตอน เราเล่าให้ฟังแบบเข้าใจง่ายว่าจะเกิดอะไรขึ้นบ้างในแต่ละชั่วโมง',
        'content': open('/tmp/article1.txt').read(),
        'date': '2024-04-08',
        'category': 'ความรู้ทั่วไป',
        'imageUrl': 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop',
        'imageAlt': 'สภาพแวดล้อมทางการแพทย์ที่อบอุ่นและสงบ',
    },
]
print(f"Loaded {len(articles_th)} Thai articles")
