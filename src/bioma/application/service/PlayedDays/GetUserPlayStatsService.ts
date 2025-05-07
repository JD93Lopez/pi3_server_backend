import PlayedDayRepositoryPort from '../../../domain/ports/driven/PlayedDayRepositoryPort';
import { AbstractPlayedDay } from '../../../domain/model/played_day/AbstractPlayedDay';
import { PlayedDayDoc } from '../../../domain/docs/PlayedDaysDoc';
import { GetUserPlayStatsServicePort } from '../../../domain/ports/driver/service/PlayedDays/GetUserPlayStatsServicePort';
import PlayedDayHelper from '../../helper/PlayedDayHelper';

export default class GetUserPlayStatsService implements GetUserPlayStatsServicePort {
    constructor(private playedDayRepository: PlayedDayRepositoryPort) {}

    async getUserPlayStats(id_user: number): Promise<AbstractPlayedDay[]> {
        try {
            const rawResults = await this.playedDayRepository.getUserPlayStats(id_user);
            const playedDayDocs: PlayedDayDoc[] = rawResults.map((result: any) => ({
                date: result.date ? new Date(result.date) : null,
                time_played: result.time_played,
                questions_learned: result.questions_learned,
                received_xp: result.received_xp,
                USERS_id_user: id_user
            }));
            return playedDayDocs.map((doc) => PlayedDayHelper.databaseToDomain(doc));
        } catch (error) {
            throw new Error(`Failed to get user play stats: ${error}`);
        }
    }
}