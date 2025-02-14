import Cliente from '../cliente/Cliente'
import NullCliente from '../cliente/NullCliente'
import AbstractCita from './AbstractCita'

export default class NullCita extends AbstractCita {

  constructor() {
    super({
      id: 0,
      tipo: 'RECLAMO',
      descripcion: 'not found description in database',
      fecha: new Date(),
      hora: '00:00',
      lugar: 'not found place in database',
      estado_cita: 'PENDIENTE',
      estado_ticket: 'PENDIENTE',
      anotaciones: 'not found notes in database',
      cliente: new NullCliente(),
    })
  }

  public override isNull = (): boolean => {
    return true
  }

  public override setId = (_id: number): void => {
    return
  }

  public override setTipo = (_tipo: string): void => {
    return
  }

  public override setDescripcion = (_descripcion: string): void => {
    return
  }

  public override setFecha = (_fecha: Date): void => {
    return
  }

  public override setHora = (_hora: string): void => {
    return
  }

  public override setLugar = (_lugar: string): void => {
    return
  }

  public override setEstadoCita = (_estado_cita: string): void => {
    return
  }

  public override setEstadoTicket = (_estado_ticket: string): void => {
    return
  }

  public override setAnotaciones = (_anotaciones: string): void => {
    return
  }

  public override setCliente = (_cliente: Cliente): void => {
    return
  }

}
