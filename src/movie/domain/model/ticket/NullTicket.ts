import AbstractCita from "../cita/AbstractCita"
import NullCita from "../cita/NullCita"
import Agente from "../agente/Agente"
import NullAgente from "../agente/NullAgente"
import Ticket from "./Ticket"

export default class NullTicket extends Ticket {
  constructor() {
    super({
      numero: 0,
      cita: new NullCita(),
      agente: new NullAgente()
    })
  }

  public override isNull = (): boolean => {
    return true
  }

  public override setNumero = (_numero: number) => {
    return
  }

  public override setCita = (_cita: AbstractCita) => {
    return
  }

  public override setAgente = (_agente: Agente) => {
    return
  }

}