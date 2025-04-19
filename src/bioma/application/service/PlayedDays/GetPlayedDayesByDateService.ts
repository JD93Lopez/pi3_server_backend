import PlayedDayRepositoryPort from "../../../domain/ports/driven/PlayedDayRepositoryPort";
import GetPlayedDaysByDateServicePort from "../../../domain/ports/driver/service/PlayedDays/GetPlayedDaysByDateServicePort";

export default class GetPlayedDaysByDateService implements GetPlayedDaysByDateServicePort{

    constructor(private readonly playedDaysRepo: PlayedDayRepositoryPort){}

    async getPlayedDaysByDate(USERS_id_user: number, date: Date) {
        
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Months are zero-based in JavaScript

        const playedDays = await this.playedDaysRepo.getPlayedDaysByDate(USERS_id_user, year, month);
        return playedDays;
    }
}