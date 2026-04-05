import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Users, Target, Lightbulb, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Horizon India Technologies</h1>
          <p className="text-lg text-primary-foreground/90">
            NABL Certified Supplier of Precision Testing Instruments in Tamil Nadu
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                Horizon India Technologies, led by proprietor T V Shankar, is a trusted supplier of precision measurement and testing instruments based in Tamil Nadu. With offices in Karur and Coimbatore, we serve leading manufacturers, laboratories, and quality control teams across South India.
              </p>
              <p className="text-muted-foreground mb-4 text-lg">
                We specialize in providing high-quality industrial testing equipment along with calibration, servicing, and technical support. Every instrument we deliver meets rigorous industry standards and undergoes comprehensive quality checks.
              </p>
              <p className="text-muted-foreground text-lg">
                With a strong focus on accuracy, reliability, and customer support, we have established ourselves as the preferred choice for precision instruments in Tamil Nadu. Our commitment to excellence ensures consistent performance and long-term partnerships with our clients.
              </p>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden h-96">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                alt="Horizon India Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-3 gap-8 my-20">
            <div className="p-8 bg-accent text-accent-foreground rounded-lg">
              <Target className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p>
                To provide high-quality precision measurement instruments that enable our customers to achieve excellence in their manufacturing and quality control processes.
              </p>
            </div>
            <div className="p-8 bg-primary text-primary-foreground rounded-lg">
              <Lightbulb className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p>
                To be the most trusted and innovative precision measurement solutions provider in India, recognized for quality, reliability, and customer service excellence.
              </p>
            </div>
            <div className="p-8 bg-secondary text-secondary-foreground rounded-lg">
              <TrendingUp className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Values</h3>
              <p>
                Integrity, quality, innovation, and customer-centric approach form the foundation of everything we do. We believe in building long-term partnerships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Certifications & Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'NABL Accredited', desc: 'National Accreditation Board for Laboratory and Calibration' },
              { title: 'ISO 9001:2015', desc: 'Quality Management System Certified' },
              { title: 'ISO/IEC 17025', desc: 'Calibration and Testing Laboratory Accreditation' },
              { title: '20+ Years', desc: 'Industry Experience and Expertise' },
            ].map((cert, i) => (
              <div key={i} className="p-6 bg-background border border-border rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-foreground mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Our Team</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            A dedicated group of engineers and professionals committed to excellence
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { role: 'Technical Team', count: '15+', desc: 'Expert engineers and technicians' },
              { role: 'Support Team', count: '10+', desc: 'Dedicated customer support professionals' },
              { role: 'Management', count: '5', desc: 'Experienced industry leaders' },
            ].map((team, i) => (
              <div key={i} className="text-center p-8 border border-border rounded-lg">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">{team.count}</h3>
                <p className="font-semibold text-foreground mb-2">{team.role}</p>
                <p className="text-muted-foreground text-sm">{team.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '2005', label: 'Year Founded' },
              { number: '1000+', label: 'Happy Clients' },
              { number: '200+', label: 'Products' },
              { number: '20+', label: 'Years Experience' },
            ].map((metric, i) => (
              <div key={i}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{metric.number}</p>
                <p className="text-primary-foreground/90">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
