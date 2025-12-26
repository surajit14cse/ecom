"use client"

import type React from "react"

import { useState } from "react"
import { ShoppingCart, Check } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { products } from "@/lib/data"

interface AddToCartButtonProps extends ButtonProps {
  productId: string
  quantity?: number
  showIcon?: boolean
}

export function AddToCartButton({
  productId,
  quantity = 1,
  showIcon = true,
  children,
  ...props
}: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const product = products.find((p) => p.id === productId)
    if (product) {
      addItem(product, quantity)
      setIsAdded(true)
      setTimeout(() => setIsAdded(false), 2000)
    }
  }

  return (
    <Button onClick={handleAddToCart} {...props}>
      {isAdded ? (
        <>
          {showIcon && <Check className="mr-2 h-4 w-4" />}
          {children || "Added!"}
        </>
      ) : (
        <>
          {showIcon && <ShoppingCart className="mr-2 h-4 w-4" />}
          {children || "Add to Cart"}
        </>
      )}
    </Button>
  )
}
