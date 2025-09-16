import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Rocket, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="quem-somos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-anton text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-balance">QUEM SOMOS?</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-lato text-lg leading-relaxed text-muted-foreground mb-6">
                Na Agile Point, transformamos sua visão em realidade digital. Com mais de 17 anos de experiência, nossa
                missão é clara: simplificar o complexo.
              </p>

              <p className="font-lato text-lg leading-relaxed text-muted-foreground mb-8">
                Desenvolvemos soluções inteligentes e eficientes que otimizam seus processos e resultados que
                impulsionam seu crescimento. Mais agilidade, produtividade e sucesso para a sua empresa.
              </p>

              <div className="space-y-6">
                <h3 className="font-anton text-2xl font-normal mb-4">O QUE FAZEMOS</h3>
                <p className="font-lato text-base leading-relaxed text-muted-foreground">
                  Na Agile Point, desenvolvemos soluções que impulsionam o seu negócio:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="font-lato font-bold">Soluções Web e Mobile:</strong>
                      <span className="font-lato text-muted-foreground">
                        {" "}
                        Criamos experiências digitais modernas e intuitivas que engajam seus clientes e expandem seu
                        alcance no mercado.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="font-lato font-bold">Automação de Processos (RPA):</strong>
                      <span className="font-lato text-muted-foreground">
                        {" "}
                        Automatizamos tarefas repetitivas, liberando sua equipe para focar em atividades estratégicas e
                        reduzindo custos operacionais.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="font-lato font-bold">Desenvolvimento Customizado (Python):</strong>
                      <span className="font-lato text-muted-foreground">
                        {" "}
                        Construímos soluções sob medida que se adaptam perfeitamente às suas necessidades, garantindo
                        escalabilidade e eficiência para o seu negócio.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-anton text-xl font-normal mb-3">INOVAÇÃO</h3>
                  <p className="font-lato text-muted-foreground leading-relaxed">
                    Sempre na vanguarda da tecnologia, buscamos as melhores soluções para cada desafio.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-anton text-xl font-normal mb-3">AGILIDADE</h3>
                  <p className="font-lato text-muted-foreground leading-relaxed">
                    Entregamos resultados rápidos sem comprometer a qualidade e excelência.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-anton text-xl font-normal mb-3">PARCERIA</h3>
                  <p className="font-lato text-muted-foreground leading-relaxed">
                    Nosso compromisso é com sua satisfação e o sucesso do seu projeto.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="font-lato text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nosso compromisso é com a sua satisfação e o sucesso do seu projeto. Entregamos soluções com agilidade e
              qualidade, garantindo resultados que superam suas expectativas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
