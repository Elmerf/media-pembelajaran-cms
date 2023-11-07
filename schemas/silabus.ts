import {defineType} from 'sanity'

export default defineType({
  name: 'silabus',
  type: 'document',
  title: 'Silabus',
  fields: [
    defineType({
      name: 'silabusFile',
      title: 'Silabus File',
      type: 'file',
    }),
  ],
})
