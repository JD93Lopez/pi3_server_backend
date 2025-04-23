import { AbstractPlayedDay } from "../../../domain/model/played_day/AbstractPlayedDay";
import GetPlayedDaysByDateServicePort from "../../../domain/ports/driver/service/PlayedDays/GetPlayedDaysByDateServicePort";
import GetPlayedDaysByDateUseCasePort from "../../../domain/ports/driver/usecase/PlayedDays/GetPlayedDaysByDateUseCasePort";

export default class GetPlayedDaysByDateUseCase implements GetPlayedDaysByDateUseCasePort{

    constructor(private readonly getPlayedDaysByDateService: GetPlayedDaysByDateServicePort) {}

    async GetPlayedDaysByDateUseCase(USERS_id_user: number, isoDate: string): Promise<AbstractPlayedDay[]> {
        const date = new Date(isoDate);
        const result = await this.getPlayedDaysByDateService.getPlayedDaysByDate(USERS_id_user, date);

        
        if (!result || result.length === 0) {
            throw new Error("No data found for the user on the specified date");
        }
        
        return result;


    }
}