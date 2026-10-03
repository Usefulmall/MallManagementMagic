export default {
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'publisher',
      title: 'Publisher',
      type: 'string',
    },
    {
      name: 'publicationYear',
      title: 'Publication Year',
      type: 'string',
    },
    {
      name: 'countryOrigin',
      title: 'Country / Origin',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'whyItHelps',
      title: 'Why It May Help a Manager',
      type: 'text',
      rows: 3,
    },
    {
      name: 'availabilityLink',
      title: 'Availability Link',
      type: 'url',
    },
    {
      name: 'category',
      title: 'Category / Tag',
      type: 'string',
    },
    {
      name: 'isJohansBook',
      title: "Is Johan's Book?",
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
        ],
      },
      initialValue: 'published',
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'author' },
  },
}
