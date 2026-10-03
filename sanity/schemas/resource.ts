export default {
  name: 'resource',
  title: 'Free Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'resourceType',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: 'Guide', value: 'guide' },
          { title: 'Checklist', value: 'checklist' },
          { title: 'Template', value: 'template' },
          { title: 'Practical Document', value: 'document' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'intendedUse',
      title: 'Intended Use',
      type: 'text',
      rows: 2,
    },
    {
      name: 'fileType',
      title: 'File Type',
      type: 'string',
      options: {
        list: [
          { title: 'PDF', value: 'PDF' },
          { title: 'Word Document (DOCX)', value: 'DOCX' },
          { title: 'Excel Spreadsheet (XLSX)', value: 'XLSX' },
          { title: 'External Link / Destination', value: 'LINK' },
        ],
      },
    },
    {
      name: 'file',
      title: 'Upload File',
      type: 'file',
      description: 'Upload downloadable resource file',
    },
    {
      name: 'externalDestination',
      title: 'External Destination Link',
      type: 'url',
    },
    {
      name: 'accessTerms',
      title: 'Access Terms',
      type: 'string',
      initialValue: 'Free access',
    },
    {
      name: 'versionDate',
      title: 'Version / Date',
      type: 'string',
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
    select: { title: 'title', subtitle: 'resourceType' },
  },
}
