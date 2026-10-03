export default {
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    {
      name: 'courseName',
      title: 'Course Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'provider',
      title: 'Provider',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'countryRegion',
      title: 'Country / Region',
      type: 'string',
    },
    {
      name: 'deliveryMode',
      title: 'Delivery Mode',
      type: 'string',
      options: {
        list: [
          { title: 'Online', value: 'online' },
          { title: 'In-person', value: 'in-person' },
          { title: 'Blended', value: 'blended' },
        ],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subjectCategory',
      title: 'Subject / Category',
      type: 'string',
    },
    {
      name: 'providerLink',
      title: 'Provider Link',
      type: 'url',
    },
    {
      name: 'availability',
      title: 'Availability Status',
      type: 'string',
    },
    {
      name: 'reviewedDate',
      title: 'Reviewed Date',
      type: 'date',
    },
    {
      name: 'status',
      title: 'Publication Status',
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
    select: { title: 'courseName', subtitle: 'provider' },
  },
}
