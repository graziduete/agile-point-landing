import type React from "react"
import type { Metadata } from "next"
import { Anton, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
})

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Agile Point - Transformando Visão em Realidade Digital",
  description:
    "Com mais de 17 anos de experiência, desenvolvemos soluções inteligentes e eficientes que otimizam seus processos e resultados.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo-white.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo-white.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Agile Point - Transformando Visão em Realidade Digital",
    description: "Com mais de 17 anos de experiência, desenvolvemos soluções inteligentes e eficientes que otimizam seus processos e resultados.",
    images: ["/images/logo-white.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agile Point - Transformando Visão em Realidade Digital",
    description: "Com mais de 17 anos de experiência, desenvolvemos soluções inteligentes e eficientes que otimizam seus processos e resultados.",
    images: ["/images/logo-white.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo-white.png" />
      </head>
      <body className={`font-lato ${anton.variable} ${lato.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
