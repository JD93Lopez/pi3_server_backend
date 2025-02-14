export default abstract class AbstractUsuario {
  protected id: number
  protected tipo: UsuarioTypes
  protected identificacion: string
  protected nombres: string
  protected apellidos: string
  protected direccion: string

  constructor(personAttributes: UsuarioAttributes) {
    this.id = personAttributes.id
    this.tipo = personAttributes.tipo
    this.identificacion = personAttributes.identificacion
    this.nombres = personAttributes.nombres
    this.apellidos = personAttributes.apellidos
    this.direccion = personAttributes.direccion
  }

  public abstract isNull: () => boolean

  public setId = (id: number) => {
    this.id = id
  }

  public setTipo = (tipo: UsuarioTypes) => {
    this.tipo = tipo
  }

  public setIdentificacion = (identificacion: string) => {
    this.identificacion = identificacion
  }

  public setNombres = (nombres: string) => {
    this.nombres = nombres
  }

  public setApellidos = (apellidos: string) => {
    this.apellidos = apellidos
  }

  public setDireccion = (direccion: string) => {
    this.direccion = direccion
  }

  public getId = (): number => {
    return this.id
  }

  public getTipo = (): UsuarioTypes => {
    return this.tipo
  }

  public getIdentificacion = (): string => {
    return this.identificacion
  }

  public getNombres = (): string => {
    return this.nombres
  }

  public getApellidos = (): string => {
    return this.apellidos
  }

  public getDireccion = (): string => {
    return this.direccion
  }
}

export type UsuarioTypes = 'CLIENTE'|'AGENTE'|'ADMINISTRADOR'

export interface UsuarioAttributes {
  id: number
  tipo: UsuarioTypes
  identificacion: string
  nombres: string
  apellidos: string
  direccion: string
}