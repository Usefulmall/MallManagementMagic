export default {
  name: 'resource',
  title: 'Resource',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Leasing & Tenants', value: 'leasing' },
          { title: 'Finance & Budgeting', value: 'finance' },
          { title: 'Operations & Maintenance', value: 'operations' },
          { title: 'Marketing & Events', value: 'marketing' },
          { title: 'Health, Safety & Compliance', value: 'safety' },
          { title: 'People & HR', value: 'people' },
          { title: 'Strategy & Reporting', value: 'strategy' },
        ]
      },
      validation: (Rule: any) => Rule.required()
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
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'file',
      title: 'Upload File',
      type: 'file',
      description: 'Upload the downloadable file here',
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'fileType' }
  }
}
