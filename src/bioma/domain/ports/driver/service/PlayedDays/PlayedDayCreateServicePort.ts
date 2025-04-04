import { AbstractPlayedDay } from "../../../../model/played_day/AbstractPlayedDay";

export default interface PlayedDayCreateServicePort {
  createPlayedDay(id_user: number, playedDay: AbstractPlayedDay): Promise<number>;
}
