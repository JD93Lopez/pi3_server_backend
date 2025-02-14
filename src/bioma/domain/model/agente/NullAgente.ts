import Agente from './Agente'

export default class NullAgente extends Agente {
  constructor() {
    super({
      id: 0,
      tipo: 'AGENTE',
      nombres: 'not found name in database',
      apellidos: 'not found lastname in database',
      identificacion: 'not found identification in database',
      direccion: 'not found address in database',
      contrasena: 'not found password in database'
    })
  }

  public override isNull = (): boolean => {
    return true
  }

  public override setId: (id: number) => void = (_id: number) => {
    return
  }

  public override setTipo: (tipo: string) => void = (_tipo: string) => {
    return
  }

  public override setIdentificacion: (identificacion: string) => void = (_identificacion: string) => {
    return
  }

  public override setNombres: (nombres: string) => void = (_nombres: string) => {
    return
  }

  public override setApellidos: (apellidos: string) => void = (_apellidos: string) => {
    return
  }

  public override setDireccion: (direccion: string) => void = (_direccion: string) => {
    return
  }

  public override setContrasena: (contrasena: string) => void = (_contrasena: string) => {
    return
  }
}
