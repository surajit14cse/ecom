import Link from "next/link"
import { ArrowRight, TrendingUp, Shield, Truck, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products, categories } from "@/lib/data"

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.isNew || p.isSale).slice(0, 4)
  const bestSellers = products.slice(0, 8)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-secondary py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Discover exceptional products at unbeatable prices
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
                Transform your shopping experience with our curated collection of premium products. Quality meets
                affordability in every item we offer.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/shop">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/categories">Browse Categories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-200/50 dark:border-blue-800/50">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <Truck className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-blue-900 dark:text-blue-100">Free Shipping</h3>
                  <p className="text-sm text-blue-700/80 dark:text-blue-300/80 leading-relaxed">
                    On all orders over $50 worldwide
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/30 dark:to-emerald-900/20 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-200/50 dark:border-emerald-800/50">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-emerald-900 dark:text-emerald-100">Secure Payment</h3>
                  <p className="text-sm text-emerald-700/80 dark:text-emerald-300/80 leading-relaxed">
                    100% protected & encrypted transactions
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/20 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-200/50 dark:border-amber-800/50">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-amber-900 dark:text-amber-100">Best Prices</h3>
                  <p className="text-sm text-amber-700/80 dark:text-amber-300/80 leading-relaxed">
                    Guaranteed lowest rates & best deals
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-200/50 dark:border-purple-800/50">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-purple-500 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <Headphones className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-purple-900 dark:text-purple-100">24/7 Support</h3>
                  <p className="text-sm text-purple-700/80 dark:text-purple-300/80 leading-relaxed">
                    Always here to help you anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
                <p className="text-muted-foreground">Check out our latest and best deals</p>
              </div>
              <Button variant="ghost" asChild>
                <Link href="/shop">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-gradient-to-br from-indigo-50 via-sky-50 to-cyan-50 dark:from-indigo-950/30 dark:via-sky-950/30 dark:to-cyan-950/30 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Shop by Category
              </h2>
              <p className="text-muted-foreground">Explore our wide range of product categories</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/shop?category=${encodeURIComponent(category.name)}`}
                  className="p-6 bg-card rounded-lg text-center hover:shadow-lg transition-all duration-300 border border-border"
                >
                  <h3 className="font-bold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} items</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="py-16 relative overflow-hidden bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 dark:from-rose-950/20 dark:via-orange-950/20 dark:to-amber-950/20">
          {/* Decorative background shapes */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-rose-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-200/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                  Best Sellers
                </h2>
                <p className="text-muted-foreground">Most popular products this month</p>
              </div>
              <Button
                variant="default"
                className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white shadow-lg"
                asChild
              >
                <Link href="/shop">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bestSellers.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Join our community and get exclusive offers
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Subscribe to our newsletter and be the first to know about new products, special promotions, and insider
              deals.
            </p>
            <Button size="lg" variant="secondary">
              Subscribe Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
