"use client"

import { useState, useEffect } from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useCartStore } from "@/store/cartStore"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ShieldCheck,
  Lock,
  Truck,
  Smartphone,
  CreditCard,
  Landmark,
  Box,
} from "lucide-react"

import { z } from "zod"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const checkoutSchema = z.object({
  firstName: z.string().min(2, "Imię musi mieć co najmniej 2 znaki"),
  lastName: z.string().min(2, "Nazwisko musi mieć co najmniej 2 znaki"),
  email: z.string().email("Niepoprawny adres e-mail"),
  street: z.string().min(3, "Podaj prawidłową ulicę i numer"),
  zipcode: z
    .string()
    .regex(/^\d{2}-\d{3}$/, "Kod pocztowy musi być w formacie 00-000"),
  city: z.string().min(2, "Podaj prawidłowe miasto"),
  newsletter: z.boolean().default(false).optional(),
  deliveryMethod: z.enum(["inpost", "dpd"]),
  paymentMethod: z.enum(["blik", "card", "transfer"]),
})

type CheckoutFormValues = z.infer<typeof checkoutSchema>

export default function CheckoutPage() {
  const [isMounted, setIsMounted] = useState(false)
  const { items, total, removeAllFromCart } = useCartStore()

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      zipcode: "",
      city: "",
      newsletter: false,
      deliveryMethod: "inpost",
      paymentMethod: "blik",
    },
    mode: "onChange",
  })

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  const deliveryMethod = form.watch("deliveryMethod")
  const deliveryCost = deliveryMethod === "inpost" ? 12.99 : 18.0
  const router = useRouter()
  const subtotal = total()
  const grandTotal = items.length > 0 ? subtotal + deliveryCost : 0

  const onSubmit = (data: CheckoutFormValues) => {
    toast.success(
      `Zamówienie złożone pomyślnie przez ${data.firstName} ${data.lastName}`,
    )
    form.reset()
    removeAllFromCart()
    setTimeout(() => {
      router.push("/shop")
    }, 2000)
  }

  if (!isMounted) return null

  return (
    <div className='min-h-screen flex flex-col items-center justify-start px-4 md:px-8 py-20 gap-8'>
      <div className='w-full max-w-6xl flex flex-col gap-8'>
        <Breadcrumb>
          <BreadcrumbList className='text-sm uppercase tracking-wider'>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Strona główna</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Kasa</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-start'
        >
          {/* Left Column - Forms */}
          <div className='w-full flex flex-col gap-10'>
            {/* 1. Customer details */}
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-3'>
                <div className='flex items-center justify-center size-8 rounded-full bg-[#d0e5c9] text-primary font-bold'>
                  1
                </div>
                <h2 className='text-2xl font-bold'>Dane klienta i adres</h2>
              </div>
              <div className='bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col gap-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='flex flex-col gap-2'>
                    <Label
                      htmlFor='firstName'
                      className='text-xs font-semibold uppercase text-stone-500 tracking-wider'
                    >
                      Imię
                    </Label>
                    <Input
                      id='firstName'
                      placeholder='Jan'
                      className={`bg-stone-100 border-transparent h-12 rounded-lg focus-visible:ring-primary ${form.formState.errors.firstName ? "border-red-500 ring-1 ring-red-500 focus-visible:ring-red-500" : ""}`}
                      {...form.register("firstName")}
                    />
                    {form.formState.errors.firstName && (
                      <span className='text-red-500 text-xs mt-1'>
                        {form.formState.errors.firstName.message}
                      </span>
                    )}
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Label
                      htmlFor='lastName'
                      className='text-xs font-semibold uppercase text-stone-500 tracking-wider'
                    >
                      Nazwisko
                    </Label>
                    <Input
                      id='lastName'
                      placeholder='Kowalski'
                      className={`bg-stone-100 border-transparent h-12 rounded-lg focus-visible:ring-primary ${form.formState.errors.lastName ? "border-red-500 ring-1 ring-red-500 focus-visible:ring-red-500" : ""}`}
                      {...form.register("lastName")}
                    />
                    {form.formState.errors.lastName && (
                      <span className='text-red-500 text-xs mt-1'>
                        {form.formState.errors.lastName.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <Label
                    htmlFor='email'
                    className='text-xs font-semibold uppercase text-stone-500 tracking-wider'
                  >
                    Adres E-mail
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='jan.kowalski@przyklad.pl'
                    className={`bg-stone-100 border-transparent h-12 rounded-lg focus-visible:ring-primary ${form.formState.errors.email ? "border-red-500 ring-1 ring-red-500 focus-visible:ring-red-500" : ""}`}
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && (
                    <span className='text-red-500 text-xs mt-1'>
                      {form.formState.errors.email.message}
                    </span>
                  )}
                </div>

                <div className='flex flex-col gap-2'>
                  <Label
                    htmlFor='street'
                    className='text-xs font-semibold uppercase text-stone-500 tracking-wider'
                  >
                    Ulica i Numer
                  </Label>
                  <Input
                    id='street'
                    placeholder='ul. Zielona 15/2'
                    className={`bg-stone-100 border-transparent h-12 rounded-lg focus-visible:ring-primary ${form.formState.errors.street ? "border-red-500 ring-1 ring-red-500 focus-visible:ring-red-500" : ""}`}
                    {...form.register("street")}
                  />
                  {form.formState.errors.street && (
                    <span className='text-red-500 text-xs mt-1'>
                      {form.formState.errors.street.message}
                    </span>
                  )}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='flex flex-col gap-2'>
                    <Label
                      htmlFor='zipcode'
                      className='text-xs font-semibold uppercase text-stone-500 tracking-wider'
                    >
                      Kod pocztowy
                    </Label>
                    <Input
                      id='zipcode'
                      placeholder='00-001'
                      className={`bg-stone-100 border-transparent h-12 rounded-lg focus-visible:ring-primary ${form.formState.errors.zipcode ? "border-red-500 ring-1 ring-red-500 focus-visible:ring-red-500" : ""}`}
                      {...form.register("zipcode")}
                    />
                    {form.formState.errors.zipcode && (
                      <span className='text-red-500 text-xs mt-1'>
                        {form.formState.errors.zipcode.message}
                      </span>
                    )}
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Label
                      htmlFor='city'
                      className='text-xs font-semibold uppercase text-stone-500 tracking-wider'
                    >
                      Miasto
                    </Label>
                    <Input
                      id='city'
                      placeholder='Warszawa'
                      className={`bg-stone-100 border-transparent h-12 rounded-lg focus-visible:ring-primary ${form.formState.errors.city ? "border-red-500 ring-1 ring-red-500 focus-visible:ring-red-500" : ""}`}
                      {...form.register("city")}
                    />
                    {form.formState.errors.city && (
                      <span className='text-red-500 text-xs mt-1'>
                        {form.formState.errors.city.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <div className='flex items-center space-x-2 mt-2'>
                    <Controller
                      name='newsletter'
                      control={form.control}
                      render={({ field }) => (
                        <Checkbox
                          id='newsletter'
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className='border-stone-300 rounded data-[state=checked]:bg-primary data-[state=checked]:border-primary'
                        />
                      )}
                    />
                    <Label
                      htmlFor='newsletter'
                      className='text-sm font-normal text-stone-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Chcę otrzymywać informacje o nowościach i promocjach.
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Delivery Method */}
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-3'>
                <div className='flex items-center justify-center size-8 rounded-full bg-[#d0e5c9] text-primary font-bold'>
                  2
                </div>
                <h2 className='text-2xl font-bold'>Metoda dostawy</h2>
              </div>

              <Controller
                name='deliveryMethod'
                control={form.control}
                render={({ field }) => (
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className='grid grid-cols-1 md:grid-cols-2 gap-4'
                  >
                    {/* Option 1 */}
                    <div>
                      <RadioGroupItem
                        value='inpost'
                        id='inpost'
                        className='peer sr-only'
                      />
                      <Label
                        htmlFor='inpost'
                        className='flex flex-col justify-between rounded-2xl border-2 border-stone-200 bg-white p-6 hover:bg-stone-50 hover:border-stone-300 peer-data-[state=checked]:border-[#765e3b] peer-data-[state=checked]:ring-1 peer-data-[state=checked]:ring-[#765e3b] cursor-pointer h-full transition-all'
                      >
                        <div className='flex justify-between items-start w-full'>
                          <div className='flex items-start gap-3'>
                            <Box className='size-6 text-stone-700' />
                            <div className='flex flex-col gap-1'>
                              <span className='font-bold text-base text-stone-900'>
                                Paczkomat InPost
                              </span>
                              <span className='text-sm text-stone-500 font-normal'>
                                Odbiór w punkcie (24/7)
                              </span>
                              <div className='mt-2 inline-flex items-center justify-center bg-[#f7eedc] text-[#8e6d3a] text-xs font-semibold px-3 py-1.5 rounded-full w-fit'>
                                Wybierz paczkomat na mapie
                              </div>
                            </div>
                          </div>
                          <span className='font-bold text-stone-900'>
                            12,99 zł
                          </span>
                        </div>
                      </Label>
                    </div>

                    {/* Option 2 */}
                    <div>
                      <RadioGroupItem
                        value='dpd'
                        id='dpd'
                        className='peer sr-only'
                      />
                      <Label
                        htmlFor='dpd'
                        className='flex flex-col justify-between rounded-2xl border-2 border-transparent bg-white p-6 hover:bg-stone-50 peer-data-[state=checked]:border-[#765e3b] peer-data-[state=checked]:ring-1 peer-data-[state=checked]:ring-[#765e3b] cursor-pointer h-full transition-all'
                      >
                        <div className='flex justify-between items-start w-full'>
                          <div className='flex items-start gap-3'>
                            <Truck className='size-6 text-stone-700' />
                            <div className='flex flex-col gap-1'>
                              <span className='font-bold text-base text-stone-900'>
                                Kurier DPD
                              </span>
                              <span className='text-sm text-stone-500 font-normal'>
                                Dostawa pod same drzwi
                              </span>
                            </div>
                          </div>
                          <span className='font-bold text-stone-900'>
                            18,00 zł
                          </span>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>

            {/* 3. Payment Method */}
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-3'>
                <div className='flex items-center justify-center size-8 rounded-full bg-[#d0e5c9] text-primary font-bold'>
                  3
                </div>
                <h2 className='text-2xl font-bold'>Metoda płatności</h2>
              </div>

              <Controller
                name='paymentMethod'
                control={form.control}
                render={({ field }) => (
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className='flex flex-col gap-3'
                  >
                    <Label
                      htmlFor='blik'
                      className='flex items-center gap-4 rounded-2xl border-2 border-transparent bg-white p-5 hover:bg-stone-50 [&:has([data-state=checked])]:border-[#765e3b] [&:has([data-state=checked])]:ring-1 [&:has([data-state=checked])]:ring-[#765e3b] cursor-pointer transition-all'
                    >
                      <RadioGroupItem
                        value='blik'
                        id='blik'
                        className='text-primary border-stone-300'
                      />
                      <div className='flex items-center gap-3 flex-1'>
                        <Smartphone className='size-5 text-stone-700' />
                        <div className='flex flex-col'>
                          <span className='font-bold text-stone-900 text-base'>
                            BLIK
                          </span>
                          <span className='text-sm text-stone-500 font-normal'>
                            Szybka płatność telefonem
                          </span>
                        </div>
                      </div>
                    </Label>

                    <Label
                      htmlFor='card'
                      className='flex items-center gap-4 rounded-2xl border-2 border-transparent bg-white p-5 hover:bg-stone-50 [&:has([data-state=checked])]:border-[#765e3b] [&:has([data-state=checked])]:ring-1 [&:has([data-state=checked])]:ring-[#765e3b] cursor-pointer transition-all'
                    >
                      <RadioGroupItem
                        value='card'
                        id='card'
                        className='text-primary border-stone-300'
                      />
                      <div className='flex items-center gap-3 flex-1'>
                        <CreditCard className='size-5 text-stone-700' />
                        <div className='flex flex-col'>
                          <span className='font-bold text-stone-900 text-base'>
                            Karta płatnicza
                          </span>
                          <span className='text-sm text-stone-500 font-normal'>
                            Visa, Mastercard
                          </span>
                        </div>
                      </div>
                    </Label>

                    <Label
                      htmlFor='transfer'
                      className='flex items-center gap-4 rounded-2xl border-2 border-transparent bg-white p-5 hover:bg-stone-50 [&:has([data-state=checked])]:border-[#765e3b] [&:has([data-state=checked])]:ring-1 [&:has([data-state=checked])]:ring-[#765e3b] cursor-pointer transition-all'
                    >
                      <RadioGroupItem
                        value='transfer'
                        id='transfer'
                        className='text-primary border-stone-300'
                      />
                      <div className='flex items-center gap-3 flex-1'>
                        <Landmark className='size-5 text-stone-700' />
                        <div className='flex flex-col'>
                          <span className='font-bold text-stone-900 text-base'>
                            Przelew online
                          </span>
                          <span className='text-sm text-stone-500 font-normal'>
                            Szybki przelew bankowy
                          </span>
                        </div>
                      </div>
                    </Label>
                  </RadioGroup>
                )}
              />
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className='w-full bg-[#ebe7de] text-stone-600 rounded-3xl p-6 md:p-8 flex flex-col gap-6 sticky top-24'>
            <h2 className='text-xl font-bold'>Podsumowanie</h2>
            <div className='w-full h-px bg-stone-300' />

            {/* Items */}
            <div className='flex flex-col gap-4'>
              {items.map((item) => (
                <div key={item.id} className='flex gap-4'>
                  <div className='shrink-0 relative size-16 bg-white rounded-full overflow-hidden border border-stone-200'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                  </div>
                  <div className='flex flex-col justify-center flex-1'>
                    <p className='font-bold text-sm text-stone-900 leading-tight'>
                      {item.name}
                    </p>
                    <p className='text-xs text-stone-500 mt-1'>
                      Sztuk: {item.quantity}
                    </p>
                    <p className='font-bold text-sm mt-1'>
                      {(item.price * (item.quantity ?? 1)).toFixed(2)} zł
                    </p>
                  </div>
                </div>
              ))}
              {items.length === 0 && (
                <div className='text-base font-semibold text-red-500 py-4'>
                  Brak produktów w koszyku
                </div>
              )}
            </div>

            <div className='w-full h-px bg-stone-300' />

            <div className='flex flex-col gap-3'>
              <div className='flex items-center justify-between text-sm text-stone-600'>
                <p>Wartość produktów</p>
                <p>{subtotal.toFixed(2) || "0.00"} zł</p>
              </div>
              <div className='flex items-center justify-between text-sm text-stone-600'>
                <p>Dostawa</p>
                <p>{items.length > 0 ? deliveryCost.toFixed(2) : "0.00"} zł</p>
              </div>
            </div>

            <div className='flex items-center justify-between text-stone-600 mt-2'>
              <p className='text-lg font-bold'>Suma</p>
              <p className='text-2xl font-bold'>{grandTotal.toFixed(2)} zł</p>
            </div>

            <Button
              className='w-full h-14 rounded-full bg-[#1a3d12] hover:bg-[#25551a] text-white text-lg font-bold flex items-center justify-center gap-2 mt-2 transition-all hover:scale-[1.02]'
              type='submit'
              disabled={items.length === 0 || !form.formState.isValid}
            >
              Zamawiam i płacę <ArrowRight className='size-5' />
            </Button>

            <div className='text-center text-[10px] text-stone-500 px-4'>
              Klikając przycisk &quot;Zamawiam i płacę&quot;, akceptujesz{" "}
              <Link href='#' className='underline hover:text-stone-800'>
                Regulamin sklepu
              </Link>{" "}
              oraz{" "}
              <Link href='#' className='underline hover:text-stone-800'>
                Politykę prywatności
              </Link>
              .
            </div>

            <div className='flex items-center justify-center gap-6 text-stone-500 mt-4'>
              <ShieldCheck className='size-5' />
              <Lock className='size-5' />
              <Truck className='size-5' />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
