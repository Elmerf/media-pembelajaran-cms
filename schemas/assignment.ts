import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'assignment',
  type: 'document',
  title: 'Assignment',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'fileMaterials',
      title: 'File Materials',
      type: 'array',
      of: [{type: 'file'}],
    }),
    defineField({
      name: 'deadline',
      title: 'Deadline',
      type: 'datetime',
    }),
    defineField({
      name: 'grades',
      title: 'Grades',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'student',
              title: 'student',
              type: 'reference',
              to: [{type: 'user'}],
            },
            {
              name: 'studentfile',
              title: 'studentFile',
              type: 'array',
              of: [{type: 'file'}],
            },
            {
              name: 'grade',
              title: 'Grade',
              type: 'number',
            },
          ],
        },
      ],
    }),
  ],
})
