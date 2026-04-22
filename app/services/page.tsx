import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CheckCircle2, Wrench, Phone, Award, Settings, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      icon: CheckCircle2,
      title: 'Product Supply',
      description: 'We supply a comprehensive range of precision measurement instruments for various industrial applications.',
      features: [
        'Wide product range across 6+ categories',
        'Competitive pricing and bulk discounts',
        'Fast delivery across India',
        'Certified genuine products',
      ],
    },
    {
      icon: Wrench,
      title: 'Calibration Services',
      description: 'Professional calibration and maintenance services ensuring your instruments meet required standards.',
      features: [
        'NABL accredited calibration',
        'ISO/IEC 17025 certified',
        'Quick turnaround time',
        'Calibration certificates provided',
      ],
    },
    {
      icon: Phone,
      title: 'Technical Support',
      description: '24/7 expert assistance for product selection, troubleshooting, and technical guidance.',
      features: [
        'Dedicated support team',
        'Product training available',
        'On-site consultation',
        'Emergency support available',
      ],
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous testing to ensure compliance with international standards.',
      features: [
        'NABL certification',
        'ISO 9001:2015 certified',
        'Regular audits and inspections',
        'Warranty on all products',
      ],
    },
    {
      icon: Settings,
      title: 'AMC & Maintenance',
      description: 'Annual maintenance contracts to keep your instruments in perfect working condition.',
      features: [
        'Preventive maintenance plans',
        'Regular servicing schedule',
        'Priority emergency support',
        'Cost-effective solutions',
      ],
    },
    {
      icon: BookOpen,
      title: 'Technical Training',
      description: 'Expert training programs for proper instrument operation and maintenance.',
      features: [
        'Hands-on training sessions',
        'Online and on-site options',
        'Certification provided',
        'Custom training modules',
      ],
    },
  ]

  return (
    <main className="bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-background border-b border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            Complete solutions for your precision measurement and calibration needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <div key={i} className="border border-border rounded-lg p-8 bg-background hover:shadow-lg transition-shadow flex flex-col">
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 flex-1">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-secondary flex-shrink-0 mt-1">✓</span>
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-6">
                    <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                      Get More Info
                    </Button>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Horizon India?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '20+ Years', desc: 'Industry experience and trusted partnership' },
              { title: 'NABL Certified', desc: 'Accredited by National Accreditation Board' },
              { title: '1000+ Clients', desc: 'Serving leading manufacturers across India' },
              { title: 'Expert Team', desc: 'Highly trained technical professionals' },
              { title: '24/7 Support', desc: 'Always available for customer assistance' },
              { title: 'Quality First', desc: 'ISO 9001:2015 certified processes' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-accent mb-2">{item.title}</p>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Customized Solution?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Our expert team is ready to help you find the perfect service package
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
