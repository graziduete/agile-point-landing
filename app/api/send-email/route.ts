import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, message } = await request.json()

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, e-mail e mensagem são obrigatórios' },
        { status: 400 }
      )
    }

    // Configuração do transporter (Gmail)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // true para 465, false para outras portas
      auth: {
        user: process.env.EMAIL_USER || 'contatoagilepoint@gmail.com',
        pass: process.env.EMAIL_PASS, // Senha de app do Gmail
      },
    })

    // Configuração do e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER || 'contatoagilepoint@gmail.com',
      to: process.env.EMAIL_TO || 'contatoagilepoint@gmail.com',
      subject: `Nova mensagem de contato - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nova Mensagem de Contato - Agile Point
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Informações do Cliente:</h3>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
            ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Mensagem:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
            <p><strong>Data/Hora:</strong> ${new Date().toLocaleString('pt-BR')}</p>
            <p><strong>IP:</strong> ${request.ip || 'N/A'}</p>
          </div>
        </div>
      `,
      text: `
        Nova Mensagem de Contato - Agile Point
        
        Informações do Cliente:
        Nome: ${name}
        E-mail: ${email}
        ${phone ? `Telefone: ${phone}` : ''}
        ${company ? `Empresa: ${company}` : ''}
        
        Mensagem:
        ${message}
        
        Data/Hora: ${new Date().toLocaleString('pt-BR')}
      `,
    }

    // Envio do e-mail
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'E-mail enviado com sucesso!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erro ao enviar e-mail:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente mais tarde.' },
      { status: 500 }
    )
  }
}