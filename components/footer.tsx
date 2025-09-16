import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <Image src="/images/logo-white.png" alt="Agile Point" width={150} height={50} className="h-10 w-auto" />
              <p className="font-lato text-sm opacity-90 leading-relaxed">
                Transformamos seus desafios em realidade digital.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-anton text-lg font-normal mb-4">NOSSOS SERVIÇOS</h3>
              <ul className="space-y-2 font-lato text-sm opacity-90">
                <li>Soluções Web e Mobile</li>
                <li>Automação de Processos (RPA)</li>
                <li>Desenvolvimento Customizado</li>
                <li>Consultoria em Tecnologia</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-anton text-lg font-normal mb-4">CONTATO</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 opacity-75" />
                  <span className="font-lato text-sm opacity-90">contatoagilepoint@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 opacity-75" />
                  <span className="font-lato text-sm opacity-90">(11) 98302-7293</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 opacity-75" />
                  <span className="font-lato text-sm opacity-90">São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="font-lato text-sm opacity-75">© 2025 Agile Point. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
