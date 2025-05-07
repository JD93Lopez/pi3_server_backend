import PlayedDayRepositoryPort from '../../../domain/ports/driven/PlayedDayRepositoryPort'
import { AbstractPlayedDay } from "../../../domain/model/played_day/AbstractPlayedDay";
import { GetLast31DaysServicePort } from "../../../domain/ports/driver/service/PlayedDays/GetLast31DaysServicePort";
import PlayedDayHelper from '../../helper/PlayedDayHelper';

export default class GetLast31DaysService implements GetLast31DaysServicePort {

    constructor(private playedDayRepository: PlayedDayRepositoryPort ) {}

    async getLast31Days(id_user: number): Promise<AbstractPlayedDay[]> {
        try {
            const results = await this.playedDayRepository.getLast31Days(id_user);
            return results.map((result)=>{return PlayedDayHelper.databaseToDomain(result)});
        } catch (error) {
            console.log(new Error(`Failed to get last 31 days: ${error}`));
            return [];
        }
    }
    
}