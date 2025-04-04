import PlayedDayCreateServicePort from "../../../domain/ports/driver/service/PlayedDayCreateServicePort";
import PlayedDayRepositoryPort from '../../../domain/ports/driven/PlayedDayRepositoryPort'
import { AbstractPlayedDay } from "../../../domain/model/played_day/AbstractPlayedDay";
import { PlayedDayDoc } from "../../../domain/docs/PlayedDaysDoc";

export default class PlayedDayCreateService implements PlayedDayCreateServicePort {

    constructor(private playedDayRepository: PlayedDayRepositoryPort ) {}

    async createPlayedDay(id_user: number, playedDay: AbstractPlayedDay): Promise<number> {

        const playedDayDoc : PlayedDayDoc = {
            date: playedDay.getDate(),
            time_played: playedDay.getTimePlayed(),
            questions_learned: playedDay.getQuestionsLearned(),
            received_xp: playedDay.getReceivedXp(),
            USERS_id_user: id_user
        }

        try {
            
            const resultUpdated = await this.playedDayRepository.update(playedDayDoc);
            
            if(resultUpdated === 0) { 
                const result = await this.playedDayRepository.save(playedDayDoc);
                return result;
            }
    
            return resultUpdated 

        } catch (error) {
            throw new Error(`Failed to create/update played day: ${error}`);
        }
        
    }
    
}