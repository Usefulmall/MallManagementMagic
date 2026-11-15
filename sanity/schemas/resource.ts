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
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'resourceType',
      title: 'Resource Category / Format',
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
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'file',
      title: 'Upload File',
      type: 'file',
      description: 'Upload downloadable resource file (required for PDF, DOCX, XLSX)',
      hidden: ({ parent }: any) => parent?.fileType === 'LINK',
      validation: (Rule: any) => Rule.custom((file: any, context: any) => {
        const fileType = context.parent?.fileType
        if (['PDF', 'DOCX', 'XLSX'].includes(fileType)) {
          if (!file || !file.asset) {
            return `A file upload is required when File Type is ${fileType}`
          }
        }
        if (fileType === 'LINK' && file && file.asset) {
          return 'File upload cannot be set when File Type is External Link (LINK)'
        }
        return true
      }),
    },
    {
      name: 'externalDestination',
      title: 'External Destination Link',
      type: 'url',
      description: 'Direct link to external resource (required for LINK)',
      hidden: ({ parent }: any) => ['PDF', 'DOCX', 'XLSX'].includes(parent?.fileType),
      validation: (Rule: any) => Rule.custom((url: any, context: any) => {
        const fileType = context.parent?.fileType
        if (fileType === 'LINK') {
          if (!url) {
            return 'An External Destination Link URL is required when File Type is External Link (LINK)'
          }
        }
        if (['PDF', 'DOCX', 'XLSX'].includes(fileType) && url) {
          return 'External Destination Link cannot be set when File Type is a file upload (PDF/DOCX/XLSX)'
        }
        return true
      }),
    },
    {
      name: 'accessTerms',
      title: 'Access Terms',
      type: 'string',
      description: 'State any conditions or terms for free access',
    },
    {
      name: 'version',
      title: 'Version Label',
      type: 'string',
      description: 'e.g. v1.0, 2024 Edition',
    },
    {
      name: 'publicationDate',
      title: 'Publication or Review Date',
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
      initialValue: 'draft',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'resourceType' },
  },
}
