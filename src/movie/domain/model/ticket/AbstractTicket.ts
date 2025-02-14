import AbstractCita from "../cita/AbstractCita"
import Agente from "../agente/Agente"

export default abstract class AbstractTicket {
    protected numero: number
    protected cita: AbstractCita
    protected agente: Agente

    constructor(personAttributes: TicketAttributes) {
        this.numero = personAttributes.numero
        this.cita = personAttributes.cita
        this.agente = personAttributes.agente
    }

    public abstract isNull: () => boolean

    public setNumero = (numero: number) => {
        this.numero = numero
    }

    public setCita = (cita: AbstractCita) => {
        this.cita = cita
    }

    public setAgente = (agente: Agente) => {
        this.agente = agente
    }

    public getNumero = (): number => {
        return this.numero
    }

    public getCita = (): AbstractCita => {
        return this.cita
    }

    public getAgente = (): Agente => {
        return this.agente
    }
}

export interface TicketAttributes {
    numero: number
    cita: AbstractCita
    agente: Agente
}