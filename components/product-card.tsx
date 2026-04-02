import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

interface ProductCardProps {
  id: string
  name: string
  category: string
  image: string
  price?: string
  specs: string[]
  description: string
}

export function ProductCard({ id, name, category, image, price, specs, description }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <div className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="w-full h-40 bg-muted flex items-center justify-center overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <Badge variant="outline" className="w-fit mb-2">{category}</Badge>
          <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2">{name}</h3>
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>

          {/* Specs */}
          <div className="mb-4 flex-1">
            <p className="text-xs font-medium text-muted-foreground mb-2">Key Specs:</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              {specs.slice(0, 2).map((spec, i) => (
                <li key={i} className="line-clamp-1">• {spec}</li>
              ))}
            </ul>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between gap-2 pt-4 border-t border-border">
            {price && <span className="font-semibold text-primary">{price}</span>}
            <Button size="sm" className="gap-2" variant={price ? 'default' : 'outline'}>
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}
