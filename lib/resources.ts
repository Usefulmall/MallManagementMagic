// UsefulMall free resources.
// To correct a title, description or file, edit the matching entry below.
// Files live in /public/resources/ and are referenced as "/resources/<file name>".

export type FreeResource = {
  _id: string
  title: string
  resourceType: 'guide' | 'checklist' | 'template' | 'document'
  description: string
  intendedUse?: string
  fileType: 'PDF' | 'DOCX' | 'DOC' | 'XLSX' | 'LINK'
  thumbnail?: string // preview image under /public
  thumbnailAlt?: string
  fileUrl?: string // file under /public
  externalDestination?: string // used when fileType is LINK
  version?: string
  accessTerms?: string
}

export const freeResources: FreeResource[] = [
  {
    _id: 'tenants-introduction-manual',
    title: 'Tenants Introduction Manual',
    resourceType: 'template',
    description:
      'This manual is ideal as an introduction for new tenants to your mall. It is available in MS Word format, so all you have to do is add your centre’s details and your own cover page.',
    intendedUse:
      'Give to every new tenant at the start of their lease. Covers 21 topics, from payments and trading hours to security and emergency planning.',
    thumbnail: '/resources/tenants-introduction-manual-index.jpg',
    thumbnailAlt: 'Index page of the Tenants Introduction Manual, listing its 21 sections',
    fileType: 'DOC',
    fileUrl: '/resources/tenants-introduction-manual.doc',
  },
  {
    _id: 'income-statement-preformulated',
    title: 'Pre-formulated Income Statement',
    resourceType: 'template',
    description:
      'A pre-formulated Excel spreadsheet built on figures extracted from the International Property Database index. Simply enter your shopping centre’s total (gross) income and the rest of the income statement is filled in for you.',
    intendedUse:
      'Draft a quick benchmark budget, or sense-check your own. Enter your expected gross income in the highlighted cell. The preview shows an example figure.',
    thumbnail: '/resources/income-statement-preformulated-preview.jpg',
    thumbnailAlt:
      'Pre-formulated income statement spreadsheet with an example gross income entered and all income and expense lines filled in',
    fileType: 'XLSX',
    fileUrl: '/resources/income-statement-preformulated.xlsx',
  },
  {
    _id: 'marketing-plan-and-budgets',
    title: 'Marketing Plan and Budgets',
    resourceType: 'template',
    description:
      'A marketing plan and budgeting template that can be used as a training aid or as a guide for new centre managers. Centre managers can also use it to guide inexperienced marketing personnel.',
    intendedUse:
      'Work through it step by step to build a centre marketing budget, with a sample annual budget on the last page.',
    thumbnail: '/resources/marketing-plan-and-budgets-preview.jpg',
    thumbnailAlt: 'First two pages of the Marketing Plan and Budgets guide',
    fileType: 'PDF',
    fileUrl: '/resources/marketing-plan-and-budgets.pdf',
  },
  {
    _id: 'house-rules',
    title: 'House Rules',
    resourceType: 'document',
    description:
      'Malls normally issue House Rules as a quick reference guide to tenants, as most of these general conduct rules are also covered in the Lease Agreement. Very few retail store managers like to read the fine print of a formal agreement, so this is a handy tool for Shopping Centre managers.',
    intendedUse:
      'Use as a model for your own centre’s House Rules, and adapt the wording to your lease and local by-laws.',
    thumbnail: '/resources/house-rules-preview.jpg',
    thumbnailAlt: 'The two pages of the House Rules document',
    fileType: 'PDF',
    fileUrl: '/resources/house-rules.pdf',
  },
]
