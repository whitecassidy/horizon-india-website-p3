'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2, Award, TrendingUp, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'

export default function Home() {
  const featuredProducts = products.slice(0, 6)

  return (
    <main className="bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Precision Engineering Since 2005
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                NABL Certified Testing Equipment Supplier in Tamil Nadu
              </h1>
              <p className="text-lg text-primary-foreground/90 text-balance">
                NABL certified manufacturer of high-precision measuring instruments trusted by leading automotive and electronics companies across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 gap-2">
                    Request Quote <ArrowRight size={20} />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                    Explore Products
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop"
                  alt="Precision measuring instruments"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-card border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'NABL Accredited', icon: '✓' },
              { label: 'ISO/IEC 17025', icon: '✓' },
              { label: '24h Response', icon: '✓' },
              { label: '50+ Clients', icon: '✓' },
            ].map((trust, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">{trust.icon}</div>
                <p className="text-sm font-semibold text-foreground">{trust.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Horizon?</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Leading-edge precision measurement solutions with unmatched quality and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'NABL Certified',
                description: 'Accredited by National Accreditation Board for Laboratory and Calibration',
              },
              {
                icon: TrendingUp,
                title: 'Industry Leaders',
                description: 'Trusted by top automotive and electronics manufacturers across India',
              },
              {
                icon: Zap,
                title: 'Precision Quality',
                description: 'High-accuracy instruments with tight tolerances and consistent performance',
              },
              {
                icon: CheckCircle2,
                title: 'Expert Support',
                description: 'Technical support and calibration services for all products',
              },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <div key={i} className="p-8 border border-border rounded-lg bg-card hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Featured Products</h2>
              <p className="text-muted-foreground">
                Explore our range of precision measuring instruments
              </p>
            </div>
            <Link href="/products" className="hidden md:block">
              <Button variant="outline" className="gap-2">
                View All Products <ArrowRight size={20} />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                image={product.image}
                price={product.price}
                specs={product.specs}
                description={product.description}
              />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/products">
              <Button className="gap-2">
                View All Products <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Our Services</h2>
          <p className="text-center text-muted-foreground mb-16 text-balance">
            Complete solutions for your measurement and calibration needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Product Supply', desc: 'Wide range of precision instruments for various applications' },
              { title: 'Calibration', desc: 'Professional calibration and maintenance services' },
              { title: 'Technical Support', desc: '24/7 expert assistance and consultation' },
            ].map((service, i) => (
              <div key={i} className="p-8 border border-border rounded-lg text-center hover:bg-muted/30 transition-colors">
                <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Precision Measurement Solutions?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 text-balance">
            Contact our expert team to find the perfect instruments for your requirements
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
              Contact Us Today <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
