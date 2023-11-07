import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'module',
  type: 'document',
  title: 'Module',
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
      name: 'goal',
      title: 'Goal',
      type: 'text',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fileMaterial',
      title: 'File Materials',
      type: 'array',
      of: [{type: 'file'}],
    }),
    defineField({
      name: 'teacher',
      title: 'Teacher',
      type: 'reference',
      to: [{type: 'user'}],
    }),
  ],
})
