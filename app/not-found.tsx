import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-6 bg-background px-4">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-9xl font-extrabold tracking-tighter  drop-shadow-sm">
         🐩 404
        </h1>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Oops! Strona nie znaleziona
        </h2>
        <p className="max-w-125 text-muted-foreground mt-2">
          Wygląda na to, że zgubiliśmy trop. Strona, której szukasz, mogła zostać usunięta, zmienić adres lub jest tymczasowo niedostępna.
        </p>
      </div>
      <Link href="/" className="mt-4">
        <Button size="lg" className="rounded-full px-8 h-12 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 text-xl cursor-pointer">
          Wróć do strony głównej
        </Button>
      </Link>
    </main>
  )
}
