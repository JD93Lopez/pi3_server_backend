import AbstractCita, { CitaAttributes } from './AbstractCita'

export default class Cita extends AbstractCita {
  

  public override isNull = (): boolean => {
    return false
  }
}
 