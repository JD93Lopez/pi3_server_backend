import AbstractUsuario, { UsuarioAttributes } from '../usuario/AbstractUsuario'

export default class Agente extends AbstractUsuario {
  protected contrasena: string

  constructor(producer: AgenteAttributes) {
    super({
      id: producer.id,
      tipo: producer.tipo,
      nombres: producer.nombres,
      apellidos: producer.apellidos,
      identificacion: producer.identificacion,
      direccion: producer.direccion
    })
    this.contrasena = producer.contrasena
  }

  public override isNull = (): boolean => {
    return false
  }

  public setContrasena = (contrasena: string) => {
    this.contrasena = contrasena
  }

  public getContrasena = (): string => {
    return this.contrasena
  }
}

export interface AgenteAttributes extends UsuarioAttributes {
  contrasena: string
}
