import { AbstractPlayedDay } from "../../../../model/played_day/AbstractPlayedDay";

export default interface GetPlayedDaysByDateServicePort {

    getPlayedDaysByDate(USERS_id_user: number, date: Date): Promise<AbstractPlayedDay[]>;
}