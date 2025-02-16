import { PlayedDaysInterface } from "../types/playedDaysInterface";
import { AbstractPlayedDays } from "./AbstractPlayedDays"

export default class PlayedDays extends AbstractPlayedDays{
  
  constructor(atributes: PlayedDaysInterface) {
    super(atributes);
  }

  isNull = (): boolean => {
    return false
  }
 
}
