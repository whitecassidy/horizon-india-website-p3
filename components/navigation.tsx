'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">H</div>
            <span className="hidden sm:inline">Horizon</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/products" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Products
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Services
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/nabl" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              NABL
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link href="/products" className="block py-2 text-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/services" className="block py-2 text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/about" className="block py-2 text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/nabl" className="block py-2 text-foreground hover:text-primary transition-colors">
              NABL
            </Link>
            <Link href="/contact" className="block py-2 text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/contact" className="block pt-2 mt-2 border-t border-border">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Get Quote
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
