import { AbstractPlayedDay } from "../../../domain/model/played_day/AbstractPlayedDay";
import PlayedDayRepositoryPort from "../../../domain/ports/driven/PlayedDayRepositoryPort";
import GetPlayedDaysByDateServicePort from "../../../domain/ports/driver/service/PlayedDays/GetPlayedDaysByDateServicePort";
import PlayedDayHelper from "../../helper/PlayedDayHelper";

export default class GetPlayedDaysByDateService implements GetPlayedDaysByDateServicePort{

    constructor(private readonly playedDaysRepo: PlayedDayRepositoryPort){}

    async getPlayedDaysByDate(USERS_id_user: number, date: Date): Promise<AbstractPlayedDay[]> {
        
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Months are zero-based in JavaScript

        const playedDays = await this.playedDaysRepo.getPlayedDaysByDate(USERS_id_user, year, month);
        const playedDayDomain = playedDays.map((playedDay) => PlayedDayHelper.databaseToDomain(playedDay));

        return playedDayDomain;

            
        
    }
}