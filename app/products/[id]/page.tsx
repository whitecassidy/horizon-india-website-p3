'use client'

import { getProductById } from '@/lib/products'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function ProductDetailPage() {
  const params = useParams()
  const product = getProductById(params.id as string)

  if (!product) {
    return (
      <main className="bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Product not found</h1>
          <p className="text-muted-foreground mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div>
              <div className="bg-muted rounded-lg overflow-hidden h-96 flex items-center justify-center sticky top-20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <Badge className="mb-4">{product.category}</Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{product.description}</p>

              <div className="mb-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                <p className="text-sm text-foreground font-medium">Price: Available on Request</p>
                <p className="text-xs text-muted-foreground mt-1">Contact us for competitive pricing and custom solutions</p>
              </div>

              <div className="mb-8 pb-8 border-b border-border">
                <h3 className="font-semibold text-foreground mb-4">Model Code</h3>
                <p className="font-mono text-lg text-primary">{product.modelCode}</p>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-accent flex-shrink-0 mt-1">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/contact?product=${product.id}`} className="flex-1">
                  <Button size="lg" className="w-full bg-secondary text-white hover:bg-secondary/90 gap-2">
                    Request Quote <ArrowRight size={20} />
                  </Button>
                </Link>
                <a 
                  href={`https://wa.me/919123456789?text=Hi, I am interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button size="lg" variant="outline" className="w-full gap-2">
                    <MessageCircle size={20} /> WhatsApp
                  </Button>
                </a>
                {product.pdfSheet && (
                  <Button size="lg" variant="outline" className="gap-2">
                    <Download size={20} /> Download Sheet
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h2>
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="divide-y divide-border">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 hover:bg-muted/30 transition-colors">
                    <div className="font-semibold text-foreground">{key}</div>
                    <div className="col-span-1 md:col-span-2 text-muted-foreground">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.applications.map((app, i) => (
                <div key={i} className="p-6 bg-muted/30 rounded-lg border border-border">
                  <p className="text-foreground font-medium">{app}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          <section className="bg-muted/30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Placeholder for related products */}
              <div className="text-center py-8 text-muted-foreground">
                <Link href="/products" className="text-accent hover:underline">
                  View all products
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}
