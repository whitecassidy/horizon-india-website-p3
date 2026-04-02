'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { products, getCategories } from '@/lib/products'
import { Button } from '@/components/ui/button'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const categories = getCategories()
  
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products

  return (
    <main className="bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-primary-foreground/90">
            Comprehensive range of precision measurement instruments for every application
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-foreground mb-4">Filter by Category</h2>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setSelectedCategory(null)}
                variant={selectedCategory === null ? 'default' : 'outline'}
                className={selectedCategory === null ? 'bg-primary text-primary-foreground' : ''}
              >
                All Products ({products.length})
              </Button>
              {categories.map((category) => {
                const count = products.filter(p => p.category === category).length
                return (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    className={selectedCategory === category ? 'bg-primary text-primary-foreground' : ''}
                  >
                    {category} ({count})
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-64">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
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
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">No products found in this category</p>
              </div>
            )}
          </div>

          {/* Results Summary */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
