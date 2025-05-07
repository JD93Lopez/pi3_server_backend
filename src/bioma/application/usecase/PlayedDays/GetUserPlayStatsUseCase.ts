import { AbstractPlayedDay } from "../../../domain/model/played_day/AbstractPlayedDay";
import { GetUserPlayStatsServicePort } from "../../../domain/ports/driver/service/PlayedDays/GetUserPlayStatsServicePort";
import { GetUserPlayStatsUseCasePort } from "../../../domain/ports/driver/usecase/PlayedDays/GetUserPlayStatsUseCasePort";

export class GetUserPlayStatsUseCase implements GetUserPlayStatsUseCasePort {
    constructor(private playedDayService: GetUserPlayStatsServicePort) {}

    async getUserPlayStats(id_user: number): Promise<AbstractPlayedDay[]> {
        const result = await this.playedDayService.getUserPlayStats(id_user);
        return result;
    }
}