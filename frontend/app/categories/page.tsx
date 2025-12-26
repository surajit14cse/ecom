import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { categories } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function CategoriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">All Categories</h1>
            <p className="text-muted-foreground">Explore our wide selection of product categories</p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link key={category.id} href={`/shop?category=${encodeURIComponent(category.name)}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 border-border overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] relative overflow-hidden bg-secondary">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-bold text-xl mb-1 group-hover:text-accent transition-colors">
                              {category.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{category.count} products</p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
