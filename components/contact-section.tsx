"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import InputMask from "react-input-mask"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
      } else {
        setSubmitStatus('error')
        console.error('Erro ao enviar e-mail:', result.error)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Erro ao enviar e-mail:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-anton text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-balance">
              VAMOS CONVERSAR?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="font-lato text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pronto para transformar sua visão em realidade digital? Entre em contato conosco e descubra como podemos
              impulsionar seu negócio.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-anton text-2xl font-normal mb-6">Envie sua Mensagem</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-lato text-sm font-medium mb-2">
                        Nome *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="font-lato"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-lato text-sm font-medium mb-2">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="font-lato"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block font-lato text-sm font-medium mb-2">
                        Telefone
                      </label>
                      <InputMask
                        mask="(99) 99999-9999"
                        value={formData.phone}
                        onChange={handleChange}
                        maskChar=" "
                      >
                        {(inputProps: any) => (
                          <Input
                            {...inputProps}
                            id="phone"
                            name="phone"
                            type="tel"
                            className="font-lato"
                            placeholder="(11) 99999-9999"
                          />
                        )}
                      </InputMask>
                    </div>
                    <div>
                      <label htmlFor="company" className="block font-lato text-sm font-medium mb-2">
                        Empresa
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="font-lato"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-lato text-sm font-medium mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="font-lato min-h-[120px]"
                      placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-lato group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        Enviando...
                        <div className="ml-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-lato text-sm">
                        ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 font-lato text-sm">
                        ❌ Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-anton text-2xl font-normal mb-6">Informações de Contato</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-lato font-semibold mb-1">E-mail</h4>
                        <p className="font-lato text-muted-foreground">contatoagilepoint@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-lato font-semibold mb-1">Telefone</h4>
                        <p className="font-lato text-muted-foreground">(11) 98302-7293</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-lato font-semibold mb-1">Localização</h4>
                        <p className="font-lato text-muted-foreground">São Paulo, SP - Brasil</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-primary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="font-anton text-xl font-normal mb-4">Resposta Rápida</h3>
                  <p className="font-lato text-sm opacity-90 leading-relaxed">
                    Respondemos todas as mensagens em até 24 horas. Para urgências, entre em contato por telefone.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
