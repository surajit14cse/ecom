// Mock product data for development
export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isNew?: boolean
  isSale?: boolean
  rating: number
  reviews: number
  stock: number
  images: string[]
  specifications?: Record<string, string>
}

export const categories = [
  { id: "electronics", name: "Electronics", count: 45, image: "/category-electronics.jpg" },
  { id: "fashion", name: "Fashion", count: 120, image: "/category-fashion.jpg" },
  { id: "home", name: "Home & Garden", count: 78, image: "/category-home.jpg" },
  { id: "sports", name: "Sports", count: 62, image: "/category-sports.jpg" },
  { id: "beauty", name: "Beauty", count: 94, image: "/category-beauty.jpg" },
  { id: "books", name: "Books", count: 156, image: "/category-books.jpg" },
]

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones Pro",
    description: "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
    price: 199.99,
    originalPrice: 299.99,
    image: "/wireless-headphones.png",
    category: "Electronics",
    isNew: false,
    isSale: true,
    rating: 5,
    reviews: 128,
    stock: 45,
    images: ["/wireless-headphones-front.png", "/wireless-headphones-side.png", "/wireless-headphones-detail.png"],
    specifications: {
      "Battery Life": "30 hours",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
      Color: "Black",
    },
  },
  {
    id: "2",
    name: "Smart Watch Ultra",
    description: "Advanced fitness tracker with heart rate monitor and GPS.",
    price: 349.99,
    image: "/modern-smartwatch.png",
    category: "Electronics",
    isNew: true,
    isSale: false,
    rating: 4,
    reviews: 89,
    stock: 32,
    images: ["/modern-smartwatch.png"],
  },
  {
    id: "3",
    name: "Designer Sunglasses",
    description: "Premium UV protection sunglasses with polarized lenses.",
    price: 129.99,
    originalPrice: 179.99,
    image: "/designer-sunglasses.png",
    category: "Fashion",
    isNew: false,
    isSale: true,
    rating: 5,
    reviews: 245,
    stock: 18,
    images: ["/designer-sunglasses.png"],
  },
  {
    id: "4",
    name: "Leather Backpack",
    description: "Handcrafted genuine leather backpack with laptop compartment.",
    price: 189.99,
    image: "/brown-leather-backpack.png",
    category: "Fashion",
    isNew: true,
    isSale: false,
    rating: 5,
    reviews: 67,
    stock: 25,
    images: ["/brown-leather-backpack.png"],
  },
  {
    id: "5",
    name: "Organic Coffee Maker",
    description: "Sustainable coffee maker with temperature control.",
    price: 89.99,
    originalPrice: 119.99,
    image: "/modern-coffee-maker.png",
    category: "Home & Garden",
    isNew: false,
    isSale: true,
    rating: 4,
    reviews: 156,
    stock: 42,
    images: ["/modern-coffee-maker.png"],
  },
  {
    id: "6",
    name: "Yoga Mat Premium",
    description: "Eco-friendly yoga mat with superior grip and cushioning.",
    price: 49.99,
    image: "/rolled-yoga-mat.png",
    category: "Sports",
    isNew: false,
    isSale: false,
    rating: 5,
    reviews: 312,
    stock: 68,
    images: ["/rolled-yoga-mat.png"],
  },
  {
    id: "7",
    name: "Skincare Set Deluxe",
    description: "Complete skincare routine with natural ingredients.",
    price: 79.99,
    originalPrice: 99.99,
    image: "/skincare-set.png",
    category: "Beauty",
    isNew: true,
    isSale: true,
    rating: 5,
    reviews: 189,
    stock: 34,
    images: ["/skincare-set.png"],
  },
  {
    id: "8",
    name: "Mystery Novel Collection",
    description: "Bestselling mystery novels bundle.",
    price: 39.99,
    image: "/mystery-books.png",
    category: "Books",
    isNew: false,
    isSale: false,
    rating: 4,
    reviews: 428,
    stock: 95,
    images: ["/mystery-books.png"],
  },
]
