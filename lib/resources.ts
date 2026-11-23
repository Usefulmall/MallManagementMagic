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
    fileType: 'DOC',
    fileUrl: '/resources/tenants-introduction-manual.doc',
  },
]
