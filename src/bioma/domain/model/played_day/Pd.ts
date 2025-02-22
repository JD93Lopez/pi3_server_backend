import { AbstractPlayedDay, PlayedDayAttributes } from "./AbstractPlayedDay";

export default class PlayedDay extends AbstractPlayedDay{
  
  constructor(atributes: PlayedDayAttributes) {
    super(atributes);
  }

  isNull = (): boolean => {
    return false
  }
 
}
