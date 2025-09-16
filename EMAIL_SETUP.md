# Configuração de E-mail - Agile Point

## ✅ O que foi implementado:

1. **API Route**: `/app/api/send-email/route.ts` - Endpoint para envio de e-mails
2. **Formulário atualizado**: O formulário de contato agora envia e-mails reais
3. **Feedback visual**: Indicadores de carregamento e status de envio
4. **E-mail corrigido**: Removido o ".br" extra do footer

## 🔧 Configuração necessária:

### 1. Criar arquivo de ambiente
Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

```env
# Configurações de E-mail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=contatoagilepoint@gmail.com
EMAIL_PASS=sua_senha_de_app_aqui
EMAIL_TO=contatoagilepoint@gmail.com
```

### 2. Configurar Gmail (IMPORTANTE!)

Para usar o Gmail, você precisa seguir estes passos:

#### Passo 1: Ativar verificação em 2 etapas
1. Acesse sua conta Google (contatoagilepoint@gmail.com)
2. Vá em **Segurança** → **Verificação em duas etapas**
3. Ative a verificação em 2 etapas se ainda não estiver ativa

#### Passo 2: Gerar senha de app
1. Ainda em **Segurança**, procure por **Senhas de app**
2. Clique em **Senhas de app**
3. Selecione **Aplicativo** → **Outro (nome personalizado)**
4. Digite "Agile Point Landing" como nome
5. Clique em **Gerar**
6. **COPIE A SENHA GERADA** (16 caracteres sem espaços)

#### Passo 3: Configurar o arquivo .env.local
1. Substitua `sua_senha_de_app_aqui` pela senha de 16 caracteres gerada
2. Salve o arquivo

### 3. Testar o sistema

1. Execute o projeto: `npm run dev`
2. Acesse a seção de contato
3. Preencha o formulário e envie
4. Verifique se o e-mail chegou em contatoagilepoint@gmail.com

## 📧 Como funciona:

- Quando um cliente preenche o formulário, os dados são enviados para `/api/send-email`
- A API formata os dados em um e-mail HTML bonito
- O e-mail é enviado para contatoagilepoint@gmail.com
- O cliente recebe feedback visual (sucesso/erro)

## 🎨 Recursos implementados:

- ✅ Validação de campos obrigatórios
- ✅ Feedback visual durante envio
- ✅ Mensagens de sucesso/erro
- ✅ E-mail formatado com HTML
- ✅ Informações do cliente organizadas
- ✅ Data/hora do envio
- ✅ Reset automático do formulário após sucesso

## 🚨 Importante:

- **NUNCA** compartilhe sua senha de app
- **NUNCA** commite o arquivo `.env.local` no Git
- A senha de app é diferente da senha da sua conta Google
- Se der erro, verifique se a verificação em 2 etapas está ativa

## 🔍 Troubleshooting:

**Erro de autenticação:**
- Verifique se a verificação em 2 etapas está ativa
- Confirme se a senha de app está correta (16 caracteres)
- Verifique se o e-mail está correto

**E-mail não chega:**
- Verifique a pasta de spam
- Confirme se o e-mail de destino está correto
- Verifique os logs do console para erros

**Formulário não envia:**
- Verifique se o servidor está rodando
- Confirme se a API está funcionando
- Verifique o console do navegador para erros