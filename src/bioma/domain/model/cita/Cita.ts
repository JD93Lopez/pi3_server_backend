import AbstractCita, { CitaAttributes } from './AbstractCita'

export default class Cita extends AbstractCita {
  constructor(movieAttributes: CitaAttributes) {
    super(movieAttributes)
  }

  public override isNull = (): boolean => {
    return false
  }
}
