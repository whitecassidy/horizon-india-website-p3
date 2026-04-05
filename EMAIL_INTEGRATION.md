# Email Integration Setup Guide

The contact form is ready for email integration. Choose one of the options below:

---

## Option 1: Formspree (Fastest - No Backend Needed)

### Setup:
1. Go to [formspree.io](https://formspree.io)
2. Create account and new form
3. Get your form ID (e.g., `f_xxxxxxxxxx`)

### Update Contact Page:
Replace the form submission logic in `/app/contact/page.tsx`:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  const formData = new FormData()
  formData.append('name', data.name)
  formData.append('email', data.email)
  formData.append('phone', data.phone)
  formData.append('company', data.company)
  formData.append('product', data.product)
  formData.append('message', data.message)
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: formData,
    })
    
    if (response.ok) {
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', company: '', product: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }
  } catch (error) {
    console.error('Error:', error)
    alert('Failed to send inquiry')
  } finally {
    setIsSubmitting(false)
  }
}
```

---

## Option 2: Nodemailer (Full Control)

### Setup:
```bash
npm install nodemailer
```

### Update `/app/api/contact/route.ts`:

```ts
import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Send to company
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'horizonindiatechnologies@gmail.com',
      subject: `New Quote Request from ${data.name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Product:</strong> ${data.product}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    })

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: 'We received your inquiry - Horizon India Technologies',
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your quote request and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to contact us directly:</p>
        <p>
          <strong>Phone:</strong> +91-98765-43210<br/>
          <strong>Email:</strong> info@horizonindiatechnologies.com
        </p>
        <p>Best regards,<br/>Horizon India Technologies Team</p>
      `,
    })

    return NextResponse.json(
      { message: 'Inquiry received successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to send inquiry' },
      { status: 500 }
    )
  }
}
```

### Add Environment Variables:
Create `.env.local`:
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

---

## Option 3: SendGrid (Cloud-Based)

### Setup:
```bash
npm install @sendgrid/mail
```

### Update `/app/api/contact/route.ts`:

```ts
import sgMail from '@sendgrid/mail'
import { NextRequest, NextResponse } from 'next/server'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Send to company
    await sgMail.send({
      to: 'horizonindiatechnologies@gmail.com',
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@horizonindia.com',
      subject: `New Quote Request from ${data.name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Product:</strong> ${data.product}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    })

    // Send confirmation to user
    await sgMail.send({
      to: data.email,
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@horizonindia.com',
      subject: 'We received your inquiry - Horizon India Technologies',
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your quote request and will get back to you within 24 hours.</p>
        <p>Best regards,<br/>Horizon India Technologies</p>
      `,
    })

    return NextResponse.json(
      { message: 'Inquiry received successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to send inquiry' },
      { status: 500 }
    )
  }
}
```

### Add Environment Variables:
```
SENDGRID_API_KEY=your-sendgrid-api-key
SENDGRID_FROM_EMAIL=noreply@horizonindia.com
```

---

## Option 4: AWS SES (Enterprise)

### Setup:
```bash
npm install @aws-sdk/client-ses
```

### Update `/app/api/contact/route.ts`:

```ts
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
import { NextRequest, NextResponse } from 'next/server'

const ses = new SESClient({ region: process.env.AWS_REGION })

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const params = {
      Source: process.env.SES_FROM_EMAIL,
      Destination: {
        ToAddresses: ['horizonindiatechnologies@gmail.com'],
      },
      Message: {
        Subject: { Data: `New Quote Request from ${data.name}` },
        Body: {
          Html: { Data: `<h2>New Quote Request</h2>...` },
        },
      },
    }

    await ses.send(new SendEmailCommand(params))

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
```

---

## Recommended Setup

**For Quick Testing:** Formspree (Option 1)
**For Production:** SendGrid (Option 3) - Reliable, scalable, good pricing

---

## Testing the Form

1. Navigate to `/contact`
2. Fill in all required fields
3. Submit the form
4. Check success message
5. Verify email was received

---

## Customization

### Update Email Content:
Edit the `html` templates in your chosen email service

### Update Email Recipients:
- Change `horizonindiatechnologies@gmail.com` to actual business email
- Update reply-to address
- Add CC/BCC as needed

### Add More Validation:
Extend validation in `/app/api/contact/route.ts`:
- Check phone format
- Verify company name
- Validate message length

---

## Troubleshooting

**"Failed to send inquiry"**
- Check API keys in environment variables
- Verify email credentials
- Check spam folder

**"Invalid email format"**
- Email validation regex in API route may be too strict
- Update regex pattern if needed

**"SMTP Error"**
- For Gmail: Use App Passwords (not regular password)
- Enable 2FA on email account
- Check firewall/port settings
