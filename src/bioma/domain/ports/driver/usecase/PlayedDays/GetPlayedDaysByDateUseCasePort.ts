import { AbstractPlayedDay } from "../../../../model/played_day/AbstractPlayedDay";

export default interface GetPlayedDaysByDateUseCasePort {
    GetPlayedDaysByDateUseCase(USERS_id_user: number, date: string): Promise<AbstractPlayedDay[]>;
}