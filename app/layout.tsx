import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import Navbar from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Dla Twojego Psa",
  description: "Zadbaj o zdrowie i szczęście swojego pupila z wyselekcjonowanymi produktami klasy premium. Naturalne składniki, trwałe akcesoria.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='pl'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className='min-h-full flex flex-col'>
        <TooltipProvider>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
        <Navbar/>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        </ThemeProvider>
        </TooltipProvider>
         <Toaster />
      </body>
    </html>
  )
}
