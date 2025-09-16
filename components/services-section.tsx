"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Cog, Code2, Lightbulb, ArrowRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Soluções Web e Mobile",
      description:
        "Criamos experiências digitais modernas e intuitivas que engajam seus clientes e expandem seu alcance no mercado.",
      features: ["Desenvolvimento Responsivo", "UX/UI Design", "Progressive Web Apps", "Apps Nativos"],
    },
    {
      icon: Cog,
      title: "Automação de Processos (RPA)",
      description:
        "Automatizamos tarefas repetitivas, liberando sua equipe para focar em atividades estratégicas e reduzindo custos operacionais.",
      features: ["Análise de Processos", "Bots Inteligentes", "Integração de Sistemas", "Monitoramento 24/7"],
    },
    {
      icon: Code2,
      title: "Desenvolvimento Customizado",
      description:
        "Construímos soluções sob medida que se adaptam perfeitamente às suas necessidades, garantindo escalabilidade e eficiência.",
      features: ["Python Development", "APIs Robustas", "Integração de Dados", "Arquitetura Escalável"],
    },
    {
      icon: Lightbulb,
      title: "Consultoria em Tecnologia",
      description:
        "Orientamos sua empresa na escolha das melhores tecnologias e estratégias digitais, maximizando resultados e minimizando riscos.",
      features: ["Análise de Arquitetura", "Roadmap Tecnológico", "Auditoria de Sistemas", "Estratégia Digital"],
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-anton text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-balance">
              NOSSOS SERVIÇOS
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="font-lato text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Soluções completas para impulsionar seu negócio no mundo digital
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-anton text-xl font-normal mb-4 text-balance">{service.title}</h3>
                    </div>

                    <p className="font-lato text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="font-lato text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <p className="font-lato text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Pronto para transformar sua visão em realidade digital? Entre em contato conosco e descubra como podemos
              impulsionar seu negócio.
            </p>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-lato group"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
