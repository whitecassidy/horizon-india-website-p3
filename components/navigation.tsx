'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeSwitcher } from '@/components/theme-switcher'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappNumber = '919751458300'
  const whatsappMessage = 'Hi, I am interested in your products and services. Please contact me.'

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background border-b border-border shadow-lg fixed left-1/2 -translate-x-1/2 top-4 w-11/12 md:max-w-2xl rounded-xl' 
        : 'w-full bg-background border-b border-border shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Image 
              src="/logo.png" 
              alt="Horizon India Technologies" 
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="hidden sm:inline text-base">Horizon India</span>
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
          <div className="hidden md:flex gap-3 items-center">
            <ThemeSwitcher />
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="gap-2">
                <MessageCircle size={16} />
                WhatsApp
              </Button>
            </a>
            <Link href="/contact">
              <Button className="bg-accent text-accent-foreground hover:opacity-90">
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
            <div className="flex flex-col gap-2 pt-2 mt-2 border-t border-border">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <MessageCircle size={16} />
                  WhatsApp
                </Button>
              </a>
              <Link href="/contact" className="w-full">
                <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
