'use client'

import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  productName?: string
}

export function WhatsAppButton({ productName }: WhatsAppButtonProps) {
  const whatsappNumber = '919123456789'
  const message = productName 
    ? `Hi, I am interested in ${productName}`
    : 'Hi, I am interested in your products and services.'

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative group">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-75 group-hover:opacity-100" />
        {/* Button */}
        <div className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center">
          <MessageCircle size={28} fill="currentColor" />
        </div>
      </div>
    </a>
  )
}
