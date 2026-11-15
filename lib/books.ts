// UsefulMall book catalogue.
// To correct a title, description, link or cover, edit the matching entry below.
// Covers live in /public/books/ and are referenced as "/books/<file name>".

export type BuyLink = {
  label: string
  url: string
  market?: string // shown as small text, e.g. "South Africa"
}

export type Book = {
  id: string
  title: string
  author: string
  publisher?: string
  year?: number
  isbn13?: string
  description: string
  cover?: string // path under /public; leave empty to show a placeholder
  coverAlt: string
  featured?: boolean
  links: BuyLink[]
}

export const books: Book[] = [
  {
    id: 'practical-guide',
    title: 'The Practical Guide to Shopping Centre Management',
    author: 'Johan Olwage',
    publisher: 'Sabraro Alpha Pty Ltd',
    year: 2025,
    isbn13: '9781037059278',
    description:
      'A practical guide to shopping-centre and mall management, covering marketing, tenant management, financial analysis, compliance and facilities maintenance.',
    cover: '/books/practical-guide.png',
    coverAlt: 'Front cover of The Practical Guide to Shopping Centre Management by Johan Olwage',
    featured: true,
    links: [
      {
        label: 'Buy on Takealot',
        market: 'South Africa',
        url: 'https://www.takealot.com/the-practical-guide-to-shopping-centre-management/PLID98502324',
      },
      {
        label: 'Amazon.com',
        market: 'International',
        url: 'https://www.amazon.com/s?k=the+practical+Guide+to+shopping+centre+management&i=stripbooks-intl-ship',
      },
      {
        label: 'ThriftBooks',
        market: 'International',
        url: 'https://www.thriftbooks.com/a/johan-olwage/12755513/',
      },
    ],
  },
  {
    id: 'mechanics-of-malls',
    title: 'The Mechanics of Malls: A Comprehensive Guide to Develop & Manage Shopping Malls',
    author: 'Susil S. Dungarwal',
    year: 2024,
    isbn13: '9798246503805',
    description:
      'A guide to the mall lifecycle, from feasibility, conceptualisation and development through leasing, fit-out, operations, reorientation and monetisation.',
    cover: '/books/mechanics-of-malls.png',
    coverAlt: 'Front cover of The Mechanics of Malls by Susil S. Dungarwal',
    links: [{ label: 'View on Amazon', url: 'https://www.amazon.com/dp/B0H2CTNMQS' }],
  },
  {
    id: 'icsc-shopping-center-management',
    title: 'Shopping Center Management',
    author: 'International Council of Shopping Centers (ICSC)',
    publisher: 'ICSC',
    year: 1999,
    isbn13: '9781582680057',
    description:
      'A professional reference covering shopping-centre finance, leases, tenant mix, administration, marketing, maintenance, security and risk management.',
    cover: '/books/icsc-shopping-center-management.png',
    coverAlt: 'Front cover of Shopping Center Management by ICSC',
    links: [{ label: 'View on Amazon', url: 'https://www.amazon.com/dp/1582680051' }],
  },
  {
    id: 'mall-management-case-studies',
    title: 'Mall Management with Case Studies',
    author: 'Abhijit Das',
    publisher: 'Taxmann Publications Pvt. Ltd',
    year: 2008,
    isbn13: '9788174969880',
    description:
      'A textbook and practical guide to shopping-centre development and management, including leasing, tenant mix, facilities, finance, operations and case studies.',
    cover: '/books/mall-management-case-studies.jpg',
    coverAlt: 'Front cover of Mall Management with Case Studies by Abhijit Das',
    links: [{ label: 'View on Amazon', url: 'https://www.amazon.com/s?k=9788174969880&i=stripbooks' }],
  },
  {
    id: 'four-rs-asian-shopping-centre-management',
    title: 'The 4 Rs of Asian Shopping Centre Management',
    author: 'Keng Neo Lynda Wee; Kok Wing Tong',
    publisher: 'Marshall Cavendish Academic',
    year: 2005,
    isbn13: '9789812103918',
    description:
      'An Asian shopping-centre management guide covering location, positioning, tenant mix, leasing, opening, customer care, maintenance and promotion.',
    cover: '/books/four-rs-asian-shopping-centre-management.png',
    coverAlt: 'Front cover of The 4 Rs of Asian Shopping Centre Management by Keng Neo Lynda Wee and Kok Wing Tong',
    links: [{ label: 'View on Amazon', url: 'https://www.amazon.com/s?k=9789812103918&i=stripbooks' }],
  },
  {
    id: 'shopping-center-management-leasing',
    title: 'Shopping Center Management and Leasing',
    author: 'Richard F. Muhlebach; Alan A. Alexander',
    publisher: 'Institute of Real Estate Management (IREM)',
    year: 2019,
    isbn13: '9781572032781',
    description:
      'A guide to managing, marketing and leasing retail properties, including shopping-centre operations and the changing responsibilities of centre managers.',
    cover: '/books/shopping-center-management-leasing.png',
    coverAlt: 'Front cover of Shopping Center Management and Leasing by Richard F. Muhlebach and Alan A. Alexander',
    links: [{ label: 'View on Amazon', url: 'https://www.amazon.com/s?k=9781572032781&i=stripbooks' }],
  },
  {
    id: 'handbook-shopping-centre-management',
    title: 'Handbook on Shopping Centre Management: Simplified.',
    author: 'M. Nauman Thakur',
    publisher: 'The Write Order',
    year: 2024,
    description:
      'A five-booklet handbook introducing shopping-centre management, industry context and key operational themes for professionals and newcomers.',
    cover: '/books/handbook-shopping-centre-management.png',
    coverAlt: 'Front cover of Handbook on Shopping Centre Management: Simplified by M. Nauman Thakur',
    links: [
      {
        label: 'View on Amazon',
        url: 'https://www.amazon.com/s?k=Handbook+on+Shopping+Centre+Management%3A+Simplified.&i=stripbooks-intl-ship',
      },
    ],
  },
]
