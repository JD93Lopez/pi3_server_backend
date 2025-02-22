import { AbstractIcon } from "./AbstractIcon"


export default class Icon extends AbstractIcon {
 
  //En typescript, si no defines un constructor en una subclase (hija), automáticamente se invoca el constructor de la clase base (padre)

  isNull = (): boolean => {
    return false
  }
 
}
