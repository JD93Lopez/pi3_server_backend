import AbstractUsuario, { UsuarioAttributes as UsuarioAttributes } from '../usuario/AbstractUsuario'

export default class Cliente extends AbstractUsuario {
  protected prioridad: PrioridadTypes
  protected fecha_natal: Date
  
  constructor(director: DirectorAttributes) {
    super({
      id: director.id,
      tipo: director.tipo,
      nombres: director.nombres,
      apellidos: director.apellidos,
      identificacion: director.identificacion,
      direccion: director.direccion,
    })
    this.prioridad = director.prioridad
    this.fecha_natal = director.fecha_natal
  }

  public override isNull = (): boolean => {
    return false
  }

  public setPrioridad = (prioridad: PrioridadTypes) => {
    this.prioridad = prioridad
  }

  public setFechaNatal = (fecha_natal: Date) => {
    this.fecha_natal = fecha_natal
  }

  public getPrioridad = (): PrioridadTypes => {
    return this.prioridad
  }

  public getFechaNatal = (): Date => {
    return this.fecha_natal
  }
}

export type PrioridadTypes = 'PREMIUM' | 'NORMAL'

export interface DirectorAttributes extends UsuarioAttributes {
  prioridad: PrioridadTypes
  fecha_natal: Date
}
