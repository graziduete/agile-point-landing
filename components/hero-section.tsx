"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Target } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 text-muted-foreground">
              <Code className="h-8 w-8" />
              <Zap className="h-8 w-8" />
              <Target className="h-8 w-8" />
            </div>
          </div>

          <h1 className="font-anton text-4xl sm:text-5xl lg:text-7xl font-normal mb-6 text-balance leading-tight">
            {"TRANSFORMAMOS DESAFIOS EM "}
            <span className="text-primary">REALIDADE DIGITAL</span>
          </h1>

          <p className="font-lato text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            Criamos soluções inteligentes que simplificam processos, ampliam resultados e aceleram o crescimento do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-lato group"
            >
              Começar Projeto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("quem-somos")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 text-lg font-lato"
            >
              Conhecer Mais
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-anton text-primary mb-2">17+</div>
              <div className="text-sm font-lato text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-anton text-primary mb-2">100+</div>
              <div className="text-sm font-lato text-muted-foreground">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-anton text-primary mb-2">100%</div>
              <div className="text-sm font-lato text-muted-foreground">Satisfação do Cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
