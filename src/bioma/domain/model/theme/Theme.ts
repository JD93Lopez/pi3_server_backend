import { AbstractTheme } from "./AbstractTheme"

export default class Theme  extends AbstractTheme{
 
  constructor(id: number, name: string) {
    super(id, name);
  }

  isNull = (): boolean => {
    return false
  }
 
}
