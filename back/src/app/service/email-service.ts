interface EmailDTO {
  especificacoes: EspecificacoesEmail
  informacoes: InformacoesEmail
}

interface EspecificacoesEmail {
  destinarario: string
  email: string
}

interface InformacoesEmail {
  assunto: string
  mensagem: string
  anexos?: string[]
}

export class EmailService {
  enviarEmail({ especificacoes, informacoes }: EmailDTO) {
    console.log(
      `E-mail enviado para ${especificacoes.destinarario} : ${informacoes.assunto}`
    )
  }
}
