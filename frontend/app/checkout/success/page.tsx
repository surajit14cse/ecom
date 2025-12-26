import Link from "next/link"
import { CheckCircle, Package, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CheckoutSuccessPage() {
  const orderNumber = `ORD-${Date.now().toString().slice(-8)}`

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="pt-12 pb-8 text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-12 w-12 text-accent" />
                </div>

                <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Thank you for your purchase. Your order has been confirmed and will be shipped soon.
                </p>

                <div className="bg-secondary p-6 rounded-lg mb-8">
                  <p className="text-sm text-muted-foreground mb-2">Order Number</p>
                  <p className="text-2xl font-bold">{orderNumber}</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 text-left">
                    <Package className="h-5 w-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="font-medium mb-1">Order Confirmation</p>
                      <p className="text-sm text-muted-foreground">
                        A confirmation email has been sent to your email address with order details.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 text-left">
                    <Package className="h-5 w-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="font-medium mb-1">Shipping Update</p>
                      <p className="text-sm text-muted-foreground">
                        You will receive a shipping notification once your order is on its way.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="flex-1">
                    <Link href="/shop">
                      Continue Shopping
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="flex-1 bg-transparent">
                    <Link href="/account">View Orders</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
