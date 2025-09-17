import type React from "react"
import type { Metadata } from "next"
import { Anton, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { SchemaMarkup } from "@/components/schema-markup"
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/google-tag-manager"
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
  title: "Agile Point - Transformando Desafios em Realidade Digital",
  description:
    "Criamos soluções inteligentes que simplificam processos, ampliam resultados e aceleram o crescimento do seu negócio. Desenvolvimento web, automação RPA, Python e consultoria em tecnologia.",
  keywords: [
    "desenvolvimento web",
    "desenvolvimento de sites",
    "plataformas digitais",
    "automação RPA",
    "desenvolvimento Python",
    "consultoria em tecnologia",
    "soluções digitais",
    "transformação digital",
    "desenvolvimento mobile",
    "APIs",
    "sistemas web",
    "automação de processos",
    "ERP",
    "redesenho de site",
    "reestruturação",
    "banco de dados",
    "agilidade",
    "sistemas personalizados",
    "integração de sistemas",
    "desenvolvimento de software"
  ],
  authors: [{ name: "Agile Point" }],
  creator: "Agile Point",
  publisher: "Agile Point",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
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
    title: "Agile Point - Transformando Desafios em Realidade Digital",
    description: "Criamos soluções inteligentes que simplificam processos, ampliam resultados e aceleram o crescimento do seu negócio. Desenvolvimento web, automação RPA, Python e consultoria em tecnologia.",
    images: ["/images/logo-white.png"],
    type: "website",
    siteName: "Agile Point",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agile Point - Transformando Desafios em Realidade Digital",
    description: "Criamos soluções inteligentes que simplificam processos, ampliam resultados e aceleram o crescimento do seu negócio. Desenvolvimento web, automação RPA, Python e consultoria em tecnologia.",
    images: ["/images/logo-white.png"],
    creator: "@agilepoint",
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
        <meta name="google-site-verification" content="AlKeIuCG-vwGOG4EfQya9PbJ_4or0xNcDO06Voe8r1A" />
        <SchemaMarkup />
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
      </head>
      <body className={`font-lato ${anton.variable} ${lato.variable} antialiased`}>
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManagerNoScript gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
