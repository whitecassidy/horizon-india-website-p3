'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react'

function ContactFormContent() {
  const searchParams = useSearchParams()
  const productId = searchParams.get('product')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: productId || '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', company: '', product: productId || '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert('Failed to send inquiry. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="Your company"
          />
        </div>
      </div>

      <div>
        <label htmlFor="product" className="block text-sm font-medium text-foreground mb-2">
          Product of Interest
        </label>
        <select
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
        >
          <option value="">Select a product</option>
          <option value="digital-micrometer">Digital Micrometer</option>
          <option value="vernier-caliper">Vernier Caliper</option>
          <option value="dial-gauge">Dial Gauge</option>
          <option value="multimeter">Digital Multimeter</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>

      {submitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-900">
          Thank you for your inquiry! We&apos;ll get back to you within 24 hours.
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-secondary text-white hover:bg-secondary/90 disabled:opacity-50 gap-2"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending...
          </>
        ) : (
          'Send Inquiry'
        )}
      </Button>
    </form>
  )
}

export default function ContactPage() {
  return (
    <main className="bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-primary-foreground/90">
            Get in touch with our team for quotes, support, or any inquiries
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            {[
              {
                icon: Phone,
                title: 'Phone',
                details: ['+91 98765 43210', '+91 20 2568 4567'],
              },
              {
                icon: Mail,
                title: 'Email',
                details: ['info@horizontech.in', 'sales@horizontech.in'],
              },
              {
                icon: MapPin,
                title: 'Address',
                details: ['123 Industrial Park', 'Pune, Maharashtra 411001, India'],
              },
            ].map((contact, i) => {
              const Icon = contact.icon
              return (
                <div key={i} className="p-8 border border-border rounded-lg bg-card text-center">
                  <Icon className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-3">{contact.title}</h3>
                  <div className="space-y-2">
                    {contact.details.map((detail, j) => (
                      <p key={j} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Send us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and our team will respond within 24 hours
              </p>
            </div>

            <div className="border border-border rounded-lg p-8 bg-card">
              <Suspense fallback={<div className="text-center py-8">Loading form...</div>}>
                <ContactFormContent />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Visit Us</h2>
          <div className="w-full h-96 bg-border rounded-lg overflow-hidden flex items-center justify-center">
            <p className="text-muted-foreground">Map location: Pune, Maharashtra, India</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What is the typical response time?',
                a: 'We aim to respond to all inquiries within 24 hours during business days.',
              },
              {
                q: 'Do you offer bulk discounts?',
                a: 'Yes, we provide competitive pricing for bulk orders. Contact our sales team for quotes.',
              },
              {
                q: 'What is your delivery timeline?',
                a: 'We deliver across India with typical delivery within 3-5 business days.',
              },
              {
                q: 'Do you provide calibration services?',
                a: 'Yes, we offer NABL-accredited calibration services for all our products.',
              },
            ].map((faq, i) => (
              <div key={i} className="p-6 border border-border rounded-lg bg-card">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
