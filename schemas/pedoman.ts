import {defineType} from 'sanity'

export default defineType({
  name: 'pedoman',
  type: 'document',
  title: 'Pedoman',
  fields: [
    defineType({
      name: 'pedomanFile',
      title: 'Pedoman File',
      type: 'file',
    }),
  ],
})
