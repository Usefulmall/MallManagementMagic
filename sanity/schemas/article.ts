export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Operations', value: 'operations' },
          { title: 'Finance', value: 'finance' },
          { title: 'Leasing', value: 'leasing' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Facilities', value: 'facilities' },
          { title: 'People Management', value: 'people' },
          { title: 'Legal & Compliance', value: 'legal' },
          { title: 'Strategy', value: 'strategy' },
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      description: '2-3 sentence summary shown on article cards',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required().max(300)
    },
    {
      name: 'body',
      title: 'Article Body',
      type: 'array',
      of: [{ type: 'block' }]
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category' }
  }
}
