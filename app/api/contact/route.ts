import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  product: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validation
    if (!data.name || !data.email || !data.phone || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Phone validation (basic)
    const phoneRegex = /^[0-9+\-\s()]{10,}$/
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      )
    }

    // Log the submission with real company email
    console.log('[Contact Form Submission]', {
      timestamp: new Date().toISOString(),
      ...data,
      companyEmail: 'horizonindiatechnologies@gmail.com',
      companyPhone: '+91 97514 58300',
    })

    // TODO: Integrate with email service (Nodemailer, SendGrid, AWS SES, Formspree, etc.)
    // Send to: horizonindiatechnologies@gmail.com
    // For now, log to console and return success
    
    // Success response
    return NextResponse.json(
      { 
        message: 'Inquiry received successfully. We will contact you within 24 hours.',
        data: {
          name: data.name,
          email: data.email,
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Contact API Error]', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
