import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Download, ArrowRight } from 'lucide-react'

interface ProductCardProps {
  id: string
  name: string
  category: string
  image: string
  specs: string[]
  description: string
}

export function ProductCard({ id, name, category, image, specs, description }: ProductCardProps) {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Image */}
      <Link href={`/products/${id}`}>
        <div className="w-full h-40 bg-muted flex items-center justify-center overflow-hidden cursor-pointer">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <Badge className="w-fit mb-2 bg-primary/10 text-primary">{category}</Badge>
        <Link href={`/products/${id}`}>
          <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2 hover:text-secondary transition-colors cursor-pointer">{name}</h3>
        </Link>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>

        {/* Specs */}
        <div className="mb-4 flex-1">
          <p className="text-xs font-medium text-muted-foreground mb-2">Key Specs:</p>
          <ul className="text-xs text-muted-foreground space-y-1">
            {specs.slice(0, 3).map((spec, i) => (
              <li key={i} className="line-clamp-1">• {spec}</li>
            ))}
          </ul>
        </div>

        {/* Price: Available on Request and CTA */}
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground mb-3">Price: Available on Request</p>
          <div className="flex gap-2">
            <Link href={`/contact?product=${id}`} className="flex-1">
              <Button size="sm" className="w-full bg-secondary text-white hover:bg-secondary/90 gap-1">
                Quote <ArrowRight size={14} />
              </Button>
            </Link>
            <Link href={`/products/${id}`}>
              <Button size="sm" variant="outline" className="gap-1" title="View Details">
                <Download size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
