import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CheckCircle2, Award, Zap } from 'lucide-react'
import Link from 'next/link'

export default function NABLPage() {
  return (
    <main className="bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NABL Certification</h1>
          <p className="text-lg text-primary-foreground/90">
            Accredited by National Accreditation Board for Laboratory and Calibration
          </p>
        </div>
      </section>

      {/* NABL Certification */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">What is NABL?</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                NABL (National Accreditation Board for Testing and Calibration Laboratories) is the sole accreditation body recognized by the Government of India to accredit laboratories and calibration centers.
              </p>
              <p className="text-muted-foreground mb-4 text-lg">
                Our laboratory is accredited under ISO/IEC 17025:2017 standard, which ensures that we meet international standards for competence, impartiality, and independence.
              </p>
              <p className="text-muted-foreground text-lg">
                This accreditation guarantees that all our measurements, calibrations, and test results are traceable to national and international standards.
              </p>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <div className="text-center p-8">
                <Award className="w-24 h-24 text-accent mx-auto mb-4" />
                <p className="text-foreground font-semibold">ISO/IEC 17025:2017</p>
                <p className="text-muted-foreground text-sm mt-2">Internationally Recognized</p>
              </div>
            </div>
          </div>

          {/* Accreditation Details */}
          <div className="bg-muted/30 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Accreditation Scope</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex gap-2 items-center">
                  <CheckCircle2 size={20} className="text-accent" /> Dimensional Measurement
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Length & Dimension (0-1000 mm)</li>
                  <li>• External Micrometers</li>
                  <li>• Vernier Calipers</li>
                  <li>• Depth Gauges</li>
                  <li>• Pin Gauge Sets</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex gap-2 items-center">
                  <CheckCircle2 size={20} className="text-accent" /> Pressure & Force
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Pressure Gauges (0-100 bar)</li>
                  <li>• Load Cells Calibration</li>
                  <li>• Force Measurement</li>
                  <li>• Torque Measurement</li>
                  <li>• Tension Testing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex gap-2 items-center">
                  <CheckCircle2 size={20} className="text-accent" /> Electrical & Electronics
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Voltage & Current Measurement</li>
                  <li>• Resistance Measurement</li>
                  <li>• Frequency & Period</li>
                  <li>• Continuity Testing</li>
                  <li>• Component Testing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex gap-2 items-center">
                  <CheckCircle2 size={20} className="text-accent" /> Mass & Weight
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Weight Calibration (1g - 20kg)</li>
                  <li>• Balance Verification</li>
                  <li>• Scale Calibration</li>
                  <li>• Precision Weights</li>
                  <li>• Standard References</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why NABL Matters */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'International Recognition',
                desc: 'NABL accreditation is recognized by ILAC (International Laboratory Accreditation Cooperation) ensuring global acceptance of our results.',
              },
              {
                icon: Zap,
                title: 'Quality Assurance',
                desc: 'We follow rigorous quality protocols and are subject to regular audits by NABL to maintain our accreditation status.',
              },
              {
                icon: CheckCircle2,
                title: 'Legal Acceptance',
                desc: 'Our calibration certificates are legally accepted by regulatory bodies, courts, and organizations worldwide.',
              },
            ].map((item, i) => (
              <div key={i} className="p-8 border border-border rounded-lg bg-card">
                <item.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Details */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Certification Details</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                { label: 'Accreditation Body', value: 'NABL, Department of Science & Technology, Government of India' },
                { label: 'Accreditation Number', value: 'NABL/RTL-0001234' },
                { label: 'Standard', value: 'ISO/IEC 17025:2017' },
                { label: 'Scope', value: '5 major areas with 50+ parameters' },
                { label: 'Validity', value: 'Valid until 2026' },
                { label: 'Last Assessment', value: '2023' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center md:justify-between p-4 border-b border-border">
                  <span className="font-semibold text-foreground">{item.label}</span>
                  <span className="text-muted-foreground mt-2 md:mt-0">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Certified Calibration?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Trust our NABL-accredited laboratory for all your measurement and calibration needs
          </p>
          <Link href="/contact">
            <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-lg font-semibold transition-colors">
              Request Calibration Service
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
