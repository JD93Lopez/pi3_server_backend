import AbstractTicket, { TicketAttributes } from './AbstractTicket'

export default class Ticket extends AbstractTicket {

  constructor(ticketAttributes: TicketAttributes) {
    super({
      numero: ticketAttributes.numero,
      cita: ticketAttributes.cita,
      agente: ticketAttributes.agente
    })
  }

  public override isNull = (): boolean => {
    return false
  }
}