"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard, Truck, Lock, ArrowLeft } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, clearCart } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [step, setStep] = useState<"shipping" | "payment" | "review">("shipping")

  const [formData, setFormData] = useState({
    // Shipping Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    // Payment Info
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    // Options
    saveInfo: false,
    shippingMethod: "standard",
    paymentMethod: "card",
  })

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const shippingCost = formData.shippingMethod === "express" ? 15.99 : totalPrice >= 50 ? 0 : 5.99
  const tax = totalPrice * 0.1
  const total = totalPrice + shippingCost + tax

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (step === "shipping") {
      setStep("payment")
      return
    }

    if (step === "payment") {
      setStep("review")
      return
    }

    // Process order
    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    clearCart()
    router.push("/checkout/success")
  }

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">Add some products to checkout!</p>
            <Button size="lg" asChild>
              <Link href="/shop">Start Shopping</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary/30">
        {/* Page Header */}
        <section className="bg-secondary py-8 border-b">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/cart">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Cart
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Checkout</h1>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Progress Steps */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        step === "shipping" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                      }`}
                    >
                      1
                    </div>
                    <span className="font-medium">Shipping</span>
                  </div>
                  <Separator className="flex-1 mx-4" />
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        step === "payment"
                          ? "bg-primary text-primary-foreground"
                          : step === "review"
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      2
                    </div>
                    <span className="font-medium">Payment</span>
                  </div>
                  <Separator className="flex-1 mx-4" />
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        step === "review" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      3
                    </div>
                    <span className="font-medium">Review</span>
                  </div>
                </div>

                {/* Shipping Information */}
                {step === "shipping" && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Truck className="h-5 w-5" />
                        Shipping Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => updateFormData("firstName", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => updateFormData("lastName", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateFormData("email", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateFormData("phone", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => updateFormData("address", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                        <Input
                          id="apartment"
                          value={formData.apartment}
                          onChange={(e) => updateFormData("apartment", e.target.value)}
                        />
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => updateFormData("city", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Input
                            id="state"
                            value={formData.state}
                            onChange={(e) => updateFormData("state", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">ZIP Code</Label>
                          <Input
                            id="zipCode"
                            value={formData.zipCode}
                            onChange={(e) => updateFormData("zipCode", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select value={formData.country} onValueChange={(value) => updateFormData("country", value)}>
                          <SelectTrigger id="country">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="United States">United States</SelectItem>
                            <SelectItem value="Canada">Canada</SelectItem>
                            <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <Label>Shipping Method</Label>
                        <RadioGroup
                          value={formData.shippingMethod}
                          onValueChange={(value) => updateFormData("shippingMethod", value)}
                        >
                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="standard" id="standard" />
                              <Label htmlFor="standard" className="cursor-pointer">
                                <div>
                                  <p className="font-medium">Standard Shipping</p>
                                  <p className="text-sm text-muted-foreground">5-7 business days</p>
                                </div>
                              </Label>
                            </div>
                            <span className="font-medium">{totalPrice >= 50 ? "Free" : "$5.99"}</span>
                          </div>
                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="express" id="express" />
                              <Label htmlFor="express" className="cursor-pointer">
                                <div>
                                  <p className="font-medium">Express Shipping</p>
                                  <p className="text-sm text-muted-foreground">2-3 business days</p>
                                </div>
                              </Label>
                            </div>
                            <span className="font-medium">$15.99</span>
                          </div>
                        </RadioGroup>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Payment Information */}
                {step === "payment" && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Payment Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <RadioGroup
                          value={formData.paymentMethod}
                          onValueChange={(value) => updateFormData("paymentMethod", value)}
                        >
                          <div className="flex items-center space-x-2 p-4 border rounded-lg">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="cursor-pointer flex-1">
                              Credit / Debit Card
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 p-4 border rounded-lg">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal" className="cursor-pointer flex-1">
                              PayPal
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {formData.paymentMethod === "card" && (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input
                              id="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              value={formData.cardNumber}
                              onChange={(e) => updateFormData("cardNumber", e.target.value)}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="cardName">Name on Card</Label>
                            <Input
                              id="cardName"
                              value={formData.cardName}
                              onChange={(e) => updateFormData("cardName", e.target.value)}
                              required
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiryDate">Expiry Date</Label>
                              <Input
                                id="expiryDate"
                                placeholder="MM/YY"
                                value={formData.expiryDate}
                                onChange={(e) => updateFormData("expiryDate", e.target.value)}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <Input
                                id="cvv"
                                placeholder="123"
                                value={formData.cvv}
                                onChange={(e) => updateFormData("cvv", e.target.value)}
                                required
                              />
                            </div>
                          </div>
                        </>
                      )}

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="saveInfo"
                          checked={formData.saveInfo}
                          onCheckedChange={(checked) => updateFormData("saveInfo", checked as boolean)}
                        />
                        <Label htmlFor="saveInfo" className="text-sm cursor-pointer">
                          Save payment information for future purchases
                        </Label>
                      </div>

                      <div className="flex items-center gap-2 p-4 bg-secondary rounded-lg">
                        <Lock className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          Your payment information is encrypted and secure
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Review Order */}
                {step === "review" && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Review Your Order</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="font-bold mb-2">Shipping Address</h3>
                        <p className="text-sm text-muted-foreground">
                          {formData.firstName} {formData.lastName}
                          <br />
                          {formData.address}
                          {formData.apartment && `, ${formData.apartment}`}
                          <br />
                          {formData.city}, {formData.state} {formData.zipCode}
                          <br />
                          {formData.country}
                        </p>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-bold mb-2">Payment Method</h3>
                        <p className="text-sm text-muted-foreground">
                          {formData.paymentMethod === "card"
                            ? `Card ending in ${formData.cardNumber.slice(-4)}`
                            : "PayPal"}
                        </p>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-bold mb-2">Shipping Method</h3>
                        <p className="text-sm text-muted-foreground">
                          {formData.shippingMethod === "standard" ? "Standard Shipping" : "Express Shipping"}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Form Actions */}
                <div className="flex gap-4">
                  {step !== "shipping" && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(step === "review" ? "payment" : "shipping")}
                      className="bg-transparent"
                    >
                      Back
                    </Button>
                  )}
                  <Button type="submit" className="flex-1" disabled={isProcessing}>
                    {isProcessing
                      ? "Processing..."
                      : step === "review"
                        ? "Place Order"
                        : step === "payment"
                          ? "Continue to Review"
                          : "Continue to Payment"}
                  </Button>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-secondary shrink-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                            {item.quantity}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                          <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                        </div>
                        <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
