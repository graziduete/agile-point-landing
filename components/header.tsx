"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Increased header height and logo size for more prominence */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo-black.png"
              alt="Agile Point"
              width={180}
              height={60}
              className="h-12 w-auto dark:hidden transition-transform hover:scale-105"
            />
            <Image
              src="/images/logo-white.png"
              alt="Agile Point"
              width={180}
              height={60}
              className="h-12 w-auto hidden dark:block transition-transform hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-muted-foreground transition-colors font-lato"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("quem-somos")}
              className="text-foreground hover:text-muted-foreground transition-colors font-lato"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection("como-fazemos")}
              className="text-foreground hover:text-muted-foreground transition-colors font-lato"
            >
              Como Fazemos
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-muted-foreground transition-colors font-lato"
            >
              Serviços
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contato
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block px-3 py-2 text-foreground hover:text-muted-foreground transition-colors font-lato w-full text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("quem-somos")}
                className="block px-3 py-2 text-foreground hover:text-muted-foreground transition-colors font-lato w-full text-left"
              >
                Quem Somos
              </button>
              <button
                onClick={() => scrollToSection("como-fazemos")}
                className="block px-3 py-2 text-foreground hover:text-muted-foreground transition-colors font-lato w-full text-left"
              >
                Como Fazemos
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="block px-3 py-2 text-foreground hover:text-muted-foreground transition-colors font-lato w-full text-left"
              >
                Serviços
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection("contato")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Contato
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
