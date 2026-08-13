export default {
  name: 'knowledgeItem',
  title: 'Knowledge Hub Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'resourceType',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: 'Book', value: 'book' },
          { title: 'Professional Association', value: 'association' },
          { title: 'Industry Journal', value: 'journal' },
          { title: 'Key Website', value: 'website' },
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      validation: (Rule: any) => Rule.required()
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'resourceType' }
  }
}
