export function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Agile Point",
    "description": "Criamos soluções inteligentes que simplificam processos, ampliam resultados e aceleram o crescimento do seu negócio. Desenvolvimento web, automação RPA, Python e consultoria em tecnologia.",
    "url": "https://agilepoint.com.br",
    "logo": "https://agilepoint.com.br/images/logo-white.png",
    "foundingDate": "2007",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-XX-XXXX-XXXX",
      "contactType": "customer service",
      "email": "contatoagilepoint@gmail.com",
      "availableLanguage": "Portuguese"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressLocality": "Brasil"
    },
    "sameAs": [
      "https://www.linkedin.com/company/agile-point",
      "https://www.instagram.com/agilepoint"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Tecnologia",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desenvolvimento Web e Mobile",
            "description": "Criamos experiências digitais modernas e intuitivas que engajam seus clientes e expandem seu alcance no mercado."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automação de Processos (RPA)",
            "description": "Automatizamos tarefas repetitivas, liberando sua equipe para focar em atividades estratégicas e reduzindo custos operacionais."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desenvolvimento Customizado",
            "description": "Construímos soluções sob medida que se adaptam perfeitamente às suas necessidades, garantindo escalabilidade e eficiência."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoria em Tecnologia",
            "description": "Orientação estratégica para transformação digital e otimização de processos."
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Agile Point",
    "url": "https://agilepoint.com.br",
    "description": "Transformamos Desafios em Realidade Digital",
    "publisher": {
      "@type": "Organization",
      "name": "Agile Point"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://agilepoint.com.br/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://agilepoint.com.br/#business",
    "name": "Agile Point",
    "description": "Empresa de tecnologia especializada em desenvolvimento web, automação RPA, Python e consultoria em tecnologia.",
    "url": "https://agilepoint.com.br",
    "telephone": "+55-XX-XXXX-XXXX",
    "email": "contatoagilepoint@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressLocality": "Brasil"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-23.5505",
      "longitude": "-46.6333"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "BRL"
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://agilepoint.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Quem Somos",
        "item": "https://agilepoint.com.br#quem-somos"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Serviços",
        "item": "https://agilepoint.com.br#servicos"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contato",
        "item": "https://agilepoint.com.br#contato"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  )
}