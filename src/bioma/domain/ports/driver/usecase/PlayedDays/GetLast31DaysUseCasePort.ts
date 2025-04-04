import { AbstractPlayedDay } from "../../../../model/played_day/AbstractPlayedDay";

export interface GetLast31DaysUseCasePort {
    getLast31Days(id_user: number): Promise<AbstractPlayedDay[]>

}