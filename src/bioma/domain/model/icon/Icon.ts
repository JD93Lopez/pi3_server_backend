import { AbstractIcon } from "./AbstractIcon"


export default class Icon extends AbstractIcon {
 
  constructor(id_icon: number, image: string) {
    super(id_icon, image);
  }

  isNull = (): boolean => {
    return false
  }
 
}
