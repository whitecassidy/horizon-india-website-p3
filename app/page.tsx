'use client'

import Link from 'next/link'
import { ArrowRight, Award, Clock, MapPin, Zap, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'

export default function Home() {
  const featuredProducts = products.slice(0, 3)
  const categories = [
    { name: 'Precision Measuring', desc: 'Digital and mechanical measuring instruments', count: 4 },
    { name: 'Electronic Meters', desc: 'Advanced electronic testing equipment', count: 3 },
    { name: 'Portable Tools', desc: 'Handheld precision instruments', count: 2 },
    { name: 'Gauge Sets', desc: 'Complete gauge and calibration sets', count: 2 },
    { name: 'Calibration', desc: 'Calibration and maintenance services', count: 1 },
    { name: 'Testing Equipment', desc: 'Industrial testing solutions', count: 1 },
  ]

  return (
    <main className="bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background border-b border-border py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-4">
                  Precision Testing Equipment & Services
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  NABL accredited supplier of material testing instruments and calibration services across Tamil Nadu
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-accent" />
                  <span className="text-sm font-medium text-foreground">NABL Accredited Lab - ISO/IEC 17025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-accent" />
                  <span className="text-sm font-medium text-foreground">24 Hour Response Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-accent" />
                  <span className="text-sm font-medium text-foreground">Regional Coverage - Karur & Coimbatore</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:opacity-90 gap-2">
                    Request a Quote <ArrowRight size={20} />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="gap-2">
                  Talk to Engineer <ArrowRight size={20} />
                </Button>
              </div>
            </div>

            {/* Right: Company Image */}
            <div className="hidden md:block">
              <div className="relative h-96 bg-secondary rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop"
                  alt="Testing laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-secondary border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <Award size={24} className="text-accent" />
              <div>
                <div className="font-semibold text-foreground">NABL Accredited</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Zap size={24} className="text-accent" />
              <div>
                <div className="font-semibold text-foreground">ISO 17025</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={24} className="text-accent" />
              <div>
                <div className="font-semibold text-foreground">24h Support</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={24} className="text-accent" />
              <div>
                <div className="font-semibold text-foreground">Regional Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Slider */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-2">Featured Products</h2>
          <p className="text-muted-foreground mb-12">Explore our most requested measurement solutions</p>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                image={product.image}
                specs={product.specs}
                description={product.shortDescription}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-secondary py-24 md:py-32 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-2">Product Categories</h2>
          <p className="text-muted-foreground mb-12">Browse our complete range of testing equipment</p>

          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <Link key={idx} href={`/products?category=${cat.name.toLowerCase()}`}>
                <div className="p-8 bg-background border border-border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <ShoppingCart size={28} className="text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cat.desc}</p>
                  <div className="text-sm font-medium text-accent">View Products →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">Why Choose Horizon</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { title: 'NABL Certified Lab', desc: 'ISO/IEC 17025 accredited for measurement accuracy and reliability' },
                { title: '25+ Years Experience', desc: 'Proven track record supplying to leading automotive and electronics manufacturers' },
                { title: '24h Response', desc: 'Dedicated support team ready to assist with your technical requirements' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Award size={24} className="text-accent mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-secondary rounded-lg p-8 h-fit">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Credentials</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <div className="font-semibold text-foreground">NABL Accreditation</div>
                  <p className="text-sm text-muted-foreground">National Accreditation Board for Laboratory & Calibration</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <div className="font-semibold text-foreground">ISO/IEC 17025</div>
                  <p className="text-sm text-muted-foreground">International standard for calibration competency</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <div className="font-semibold text-foreground">Regional Service Network</div>
                  <p className="text-sm text-muted-foreground">Karur & Coimbatore based with extensive coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary border-y border-border py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground mb-12">Complete solutions for your testing requirements</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Equipment Supply',
                services: ['Precision instruments', 'Measurement tools', 'Testing equipment', 'Bulk orders'],
              },
              {
                title: 'Calibration & AMC',
                services: ['NABL calibration', 'Annual maintenance', 'On-site servicing', 'Emergency repairs'],
              },
              {
                title: 'Technical Services',
                services: ['Consultation', 'Training programs', 'Custom solutions', 'Support & warranty'],
              },
              {
                title: 'Customization',
                services: ['Special requirements', 'Integration services', 'Technical specifications', 'Volume discounts'],
              },
            ].map((service, i) => (
              <div key={i} className="p-8 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.services.map((s, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span className="text-muted-foreground text-sm">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Have a Testing Requirement?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Our experts are ready to help you find the perfect solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:opacity-90 gap-2">
                Request a Quote <ArrowRight size={20} />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="gap-2">
              Talk to Engineer <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
