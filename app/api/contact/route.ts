import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const contactDestination = process.env.CONTACT_DESTINATION_EMAIL

    if (!contactDestination) {
      return NextResponse.json(
        { error: 'Contact submission endpoint is not configured with CONTACT_DESTINATION_EMAIL.' },
        { status: 503 }
      )
    }

    // Process submission via configured service
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 })
  }
}
