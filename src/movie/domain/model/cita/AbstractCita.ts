import Cliente from '../cliente/Cliente'

export default abstract class AbstractCita {
  protected id: number
  protected tipo: CitaTypes
  protected descripcion: string
  protected fecha: Date
  protected hora: string
  protected lugar: string
  protected estado_cita: EstadoCitaTypes
  protected estado_ticket: EstadoTicketTypes
  protected anotaciones: string
  protected cliente: Cliente

  constructor(movieAttributes: CitaAttributes) {
    this.id = movieAttributes.id
    this.tipo = movieAttributes.tipo
    this.descripcion = movieAttributes.descripcion
    this.fecha = movieAttributes.fecha
    this.hora = movieAttributes.hora
    this.lugar = movieAttributes.lugar
    this.estado_cita = movieAttributes.estado_cita
    this.estado_ticket = movieAttributes.estado_ticket
    this.anotaciones = movieAttributes.anotaciones
    this.cliente = movieAttributes.cliente
  }
  
  public abstract isNull: () => boolean

  public setId = (id: number) => {
    this.id = id
  }

  public setTipo = (tipo: CitaTypes) => {
    this.tipo = tipo
  }

  public setDescripcion = (descripcion: string) => {
    this.descripcion = descripcion
  }

  public setFecha = (fecha: Date) => {
    this.fecha = fecha
  }

  public setHora = (hora: string) => {
    this.hora = hora
  }

  public setLugar = (lugar: string) => {
    this.lugar = lugar
  }

  public setEstadoCita = (estado_cita: EstadoCitaTypes) => {
    this.estado_cita = estado_cita
  }

  public setEstadoTicket = (estado_ticket: EstadoTicketTypes) => {
    this.estado_ticket = estado_ticket
  }

  public setAnotaciones = (anotaciones: string) => {
    this.anotaciones = anotaciones
  }

  public setCliente = (cliente: Cliente) => {
    this.cliente = cliente
  }

  public getId = (): number => {
    return this.id
  }

  public getTipo = (): CitaTypes => {
    return this.tipo
  }

  public getDescripcion = (): string => {
    return this.descripcion
  }

  public getFecha = (): Date => {
    return this.fecha
  }

  public getHora = (): string => {
    return this.hora
  }

  public getLugar = (): string => {
    return this.lugar
  }

  public getEstadoCita = (): EstadoCitaTypes => {
    return this.estado_cita
  }

  public getEstadoTicket = (): EstadoTicketTypes => {
    return this.estado_ticket
  }

  public getAnotaciones = (): string => {
    return this.anotaciones
  }

  public getCliente = (): Cliente => {
    return this.cliente
  }
}

export type EstadoCitaTypes = 'PENDIENTE'|'FINALIZADA'
export type EstadoTicketTypes = 'PENDIENTE'|'GENERADO'
export type CitaTypes = 'RECLAMO'|'DEVOLUCION'|'ASESORIA'

export interface CitaAttributes {
  id: number
  tipo: CitaTypes
  descripcion: string
  fecha: Date
  hora: string
  lugar: string
  estado_cita: EstadoCitaTypes
  estado_ticket: EstadoTicketTypes
  anotaciones: string
  cliente: Cliente
}
