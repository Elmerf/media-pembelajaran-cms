import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'password',
      title: 'Password',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'is_admin',
      title: 'Is Admin',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'log_activities',
      title: 'Log Activities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'date_start',
              title: 'Date Start',
              type: 'datetime',
            },
            {
              name: 'date_end',
              title: 'Date End',
              type: 'datetime',
            },
            {
              name: 'module',
              title: 'Module',
              type: 'array',
              of: [{type: 'reference', to: [{type: 'module'}]}],
            },
            {
              name: 'assignment',
              title: 'Assignment',
              type: 'array',
              of: [{type: 'reference', to: [{type: 'assignment'}]}],
            },
            {
              name: 'time_spend',
              title: 'Time Spend',
              type: 'number',
            },
          ],
        },
      ],
    }),
  ],
})
