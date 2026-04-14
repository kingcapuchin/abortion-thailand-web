import { defineType, defineField } from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'Thai', value: 'th' },
          { title: 'English', value: 'en' },
        ],
        layout: 'radio',
      },
      initialValue: 'th',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'ความรู้ทั่วไป', value: 'ความรู้ทั่วไป' },
          { title: 'สิทธิและกฎหมาย', value: 'สิทธิและกฎหมาย' },
          { title: 'การดูแลสุขภาพ', value: 'การดูแลสุขภาพ' },
          { title: 'สำหรับผู้ป่วยต่างชาติ', value: 'สำหรับผู้ป่วยต่างชาติ' },
          { title: 'ราคา', value: 'ราคา' },
          { title: 'สิทธิผู้เยาว์', value: 'สิทธิผู้เยาว์' },
          { title: 'วิธีทำ', value: 'วิธีทำ' },
          { title: 'อาการ', value: 'อาการ' },
          { title: 'อายุครรภ์', value: 'อายุครรภ์' },
          { title: 'General Information', value: 'General Information' },
          { title: 'Rights & Legal', value: 'Rights & Legal' },
          { title: 'Health Care', value: 'Health Care' },
          { title: 'For International Patients', value: 'For International Patients' },
          { title: 'Pricing', value: 'Pricing' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
      media: 'image',
    },
    prepare({ title, language, media }) {
      return {
        title,
        subtitle: language?.toUpperCase(),
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})