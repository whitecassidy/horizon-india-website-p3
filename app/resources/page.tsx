import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Download, FileText, Video, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ResourcesPage() {
  const resources = [
    {
      title: 'Product Datasheets',
      icon: FileText,
      items: [
        { name: 'Digital Micrometer Guide', file: 'digital-micrometer-guide.pdf' },
        { name: 'Vernier Caliper Specifications', file: 'vernier-caliper-specs.pdf' },
        { name: 'Dial Gauge Manual', file: 'dial-gauge-manual.pdf' },
        { name: 'Complete Product Catalog', file: 'complete-catalog.pdf' },
      ],
    },
    {
      title: 'Technical Guides',
      icon: BookOpen,
      items: [
        { name: 'Measurement Best Practices', file: 'best-practices.pdf' },
        { name: 'Calibration Procedures', file: 'calibration-guide.pdf' },
        { name: 'Accuracy & Tolerance Guide', file: 'accuracy-guide.pdf' },
        { name: 'Maintenance Manual', file: 'maintenance-manual.pdf' },
      ],
    },
    {
      title: 'Certification Documents',
      icon: FileText,
      items: [
        { name: 'NABL Accreditation Certificate', file: 'nabl-certificate.pdf' },
        { name: 'ISO 9001 Certificate', file: 'iso-certificate.pdf' },
        { name: 'ISO/IEC 17025 Certificate', file: 'iec-certificate.pdf' },
        { name: 'Quality Policy', file: 'quality-policy.pdf' },
      ],
    },
  ]

  return (
    <main className="bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-lg text-primary-foreground/90">
            Download technical documents, guides, and certificates
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((category, i) => {
              const Icon = category.icon
              return (
                <div key={i} className="border border-border rounded-lg p-8 bg-card">
                  <Icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-6">{category.title}</h3>
                  <div className="space-y-3">
                    {category.items.map((item, j) => (
                      <a
                        key={j}
                        href="#"
                        className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-muted/30 transition-colors group"
                      >
                        <Download size={16} className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Educational Content</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Understanding Precision Measurement',
                desc: 'Learn the fundamentals of precision measurement and why accuracy matters in manufacturing',
                duration: '8 min read',
              },
              {
                title: 'Calibration Standards and Traceability',
                desc: 'Comprehensive guide on calibration standards, NABL accreditation, and measurement traceability',
                duration: '12 min read',
              },
              {
                title: 'Proper Use of Measurement Instruments',
                desc: 'Best practices for using micrometers, calipers, gauges, and other precision instruments',
                duration: '10 min read',
              },
              {
                title: 'Quality Control in Manufacturing',
                desc: 'How precision measurement instruments support quality assurance in production',
                duration: '15 min read',
              },
            ].map((content, i) => (
              <div key={i} className="p-8 border border-border rounded-lg bg-card hover:shadow-lg transition-shadow cursor-pointer">
                <Video className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-bold text-foreground mb-2">{content.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{content.desc}</p>
                <span className="text-xs font-medium text-accent">{content.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Resources */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'What documents do I receive with my purchase?',
                a: 'Each product comes with a user manual, calibration certificate, and warranty documentation. Digital copies are also available.',
              },
              {
                q: 'How do I interpret calibration certificates?',
                a: 'Calibration certificates show measurement results, uncertainties, and traceability information. Our support team can explain any values.',
              },
              {
                q: 'Where can I find product specifications?',
                a: 'Product datasheets are available in the Resources section or on individual product pages. Contact us for additional technical information.',
              },
              {
                q: 'Are there training programs available?',
                a: 'Yes, we offer on-site training for proper instrument usage. Contact our technical team to arrange a session.',
              },
              {
                q: 'How often should I calibrate my instruments?',
                a: 'Calibration frequency depends on usage and industry standards. Typically, 6-12 months is recommended. Consult our experts for guidance.',
              },
            ].map((faq, i) => (
              <div key={i} className="p-6 border border-border rounded-lg bg-card">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Can&apos;t find what you need?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Our expert team is here to help with any questions or technical support
          </p>
          <a href="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Contact Support
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
