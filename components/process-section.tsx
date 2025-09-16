import { Card, CardContent } from "@/components/ui/card"
import { Search, Palette, Users, Rocket } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      number: "1ª",
      title: "Descoberta & Insights",
      description:
        "Em sessões colaborativas, conduzimos o alinhamento inicial explorando o momento atual, os cenários e as possibilidades para gerar sensibilização e entendimento compartilhado.",
      icon: Search,
    },
    {
      number: "2ª",
      title: "Design & Construção",
      description:
        "Com base nas prioridades levantadas, desenvolvemos a solução a partir de uma análise completa de processos, tecnologias e estrutura, definindo outputs e outcomes esperados para orientar e sustentar a evolução do projeto.",
      icon: Palette,
    },
    {
      number: "3ª",
      title: "Colaboração & Teste",
      description:
        "Desenhamos a solução e o novo modelo, utilizando diagramas, protótipos e simulações para validar em conjunto sua aceitação e preparar a estratégia de entrega.",
      icon: Users,
    },
    {
      number: "4ª",
      title: "Resultados & Entrega",
      description:
        "Implementamos o plano de ação com uma equipe multidisciplinar, garantindo a integração das diferentes frentes envolvidas e assegurando os resultados esperados.",
      icon: Rocket,
    },
  ]

  return (
    <section id="como-fazemos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-anton text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-balance">COMO FAZEMOS?</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="font-lato text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nossa metodologia comprovada garante resultados excepcionais em cada projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div className="font-anton text-2xl text-muted-foreground mb-2">{step.number} Etapa</div>
                    </div>

                    <h3 className="font-anton text-xl font-normal mb-4 text-balance">{step.title}</h3>

                    <p className="font-lato text-sm text-muted-foreground leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Process Flow Visualization */}
          <div className="mt-16 hidden lg:block">
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2"></div>
              <div className="flex justify-between items-center relative z-10">
                {steps.map((_, index) => (
                  <div key={index} className="w-4 h-4 bg-primary rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
