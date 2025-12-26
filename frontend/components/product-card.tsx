import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { WishlistButton } from "@/components/wishlist-button"

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isNew?: boolean
  isSale?: boolean
  rating?: number
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew,
  isSale,
  rating = 5,
}: ProductCardProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        {/* Image Container */}
        <Link href={`/product/${id}`} className="relative block aspect-square overflow-hidden bg-muted">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && <Badge className="bg-accent text-accent-foreground">New</Badge>}
            {isSale && discount > 0 && (
              <Badge className="bg-destructive text-destructive-foreground">-{discount}%</Badge>
            )}
          </div>
          {/* Quick Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <WishlistButton productId={id} size="icon" variant="secondary" className="h-9 w-9 rounded-full" />
            <AddToCartButton productId={id} size="icon" variant="secondary" className="h-9 w-9 rounded-full">
              <ShoppingCart className="h-4 w-4" />
            </AddToCartButton>
          </div>
        </Link>

        {/* Product Info */}
        <div className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{category}</p>
          <Link href={`/product/${id}`}>
            <h3 className="font-medium text-sm mb-2 hover:text-accent transition-colors line-clamp-2">{name}</h3>
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${originalPrice.toFixed(2)}</span>
            )}
          </div>
          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`text-sm ${i < rating ? "text-accent" : "text-muted-foreground"}`}>
                ★
              </span>
            ))}
          </div>

          <Link
            href={`/product/${id}`}
            className="block mt-3 w-full bg-accent text-accent-foreground py-2 px-4 rounded-md font-medium text-sm hover:bg-accent/90 transition-colors text-center"
          >
            Shop Now
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
