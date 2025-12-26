"use client"

import type React from "react"

import { useState } from "react"
import { Heart } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { useWishlist } from "@/lib/wishlist-context"
import { products } from "@/lib/data"

interface WishlistButtonProps extends ButtonProps {
  productId: string
}

export function WishlistButton({ productId, ...props }: WishlistButtonProps) {
  const { addItem, removeItem, isInWishlist } = useWishlist()
  const [isAnimating, setIsAnimating] = useState(false)
  const inWishlist = isInWishlist(productId)

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const product = products.find((p) => p.id === productId)
    if (!product) return

    if (inWishlist) {
      removeItem(productId)
    } else {
      addItem(product)
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 300)
    }
  }

  return (
    <Button onClick={handleToggle} {...props}>
      <Heart className={`h-4 w-4 ${inWishlist ? "fill-current" : ""} ${isAnimating ? "animate-bounce" : ""}`} />
    </Button>
  )
}
