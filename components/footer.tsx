import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Horizon India</h3>
            <p className="text-sm opacity-90 mb-4">
              Leading manufacturer of precision measurement instruments for automotive and electronics industries.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-75 transition-opacity" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?category=precision" className="hover:opacity-75 transition-opacity">Precision Measuring</Link></li>
              <li><Link href="/products?category=electronic" className="hover:opacity-75 transition-opacity">Electronic Meters</Link></li>
              <li><Link href="/products?category=portable" className="hover:opacity-75 transition-opacity">Portable Tools</Link></li>
              <li><Link href="/products?category=gauges" className="hover:opacity-75 transition-opacity">Gauge Sets</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:opacity-75 transition-opacity">About Us</Link></li>
              <li><Link href="/nabl" className="hover:opacity-75 transition-opacity">NABL Certification</Link></li>
              <li><Link href="/contact" className="hover:opacity-75 transition-opacity">Contact</Link></li>
              <li><Link href="/resources" className="hover:opacity-75 transition-opacity">Resources</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2 items-start">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="opacity-90">123 Industrial Park, Pune, India</span>
              </div>
              <div className="flex gap-2 items-center">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:opacity-75 transition-opacity">+91 98765 43210</a>
              </div>
              <div className="flex gap-2 items-center">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@horizontech.in" className="hover:opacity-75 transition-opacity break-all">info@horizontech.in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; 2024 Horizon India Technologies. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
