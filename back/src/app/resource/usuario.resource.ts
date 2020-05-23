import { Request, Response } from 'express'
import { EmailService } from '../service/email-service'

const usuarios = [
  {
    nome: 'Nichollas Falcão',
    email: 'nychollas2013@hotmail.com',
  },
]

export default {
  index(request: Request, response: Response) {
    return response.json(usuarios)
  },
  create(request: Request, response: Response) {
    const emailService = new EmailService()
    emailService.enviarEmail({
      especificacoes: {
        destinarario: 'Nichollas Falcão',
        email: 'nychollas2013@hotmail.com',
      },
      informacoes: { assunto: 'TypeScript - API', mensagem: 'Kickstart' },
    })
    return response.send('E-mail enviado!')
  },
}
