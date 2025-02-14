import Cliente from './Cliente'

export default class NullCliente extends Cliente {
  constructor() {
    super({
      id: 0,
      tipo: 'CLIENTE',
      nombres: 'not found name in database',
      apellidos: 'not found lastname in database',
      identificacion: 'not found identification in database',
      direccion: 'not found address in database',
      prioridad: 'NORMAL',
      fecha_natal: new Date()
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

  public override setPrioridad: (prioridad: string) => void = (_prioridad: string) => {
    return
  }

  public override setFechaNatal: (fecha_natal: Date) => void = (_fecha_natal: Date) => {
    return
  }
}
