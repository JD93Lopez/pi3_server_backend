import { UserRepositoryPort } from "../../../domain/ports/driven/UserRepositoryPort";
import UpdateUserLeagueServicePort from "../../../domain/ports/driver/service/Users/UpdateUserLeagueServicePort";

export default class UpdateUserLeagueService implements UpdateUserLeagueServicePort{
    constructor(private userRepository: UserRepositoryPort){}

    async updateUserLeague(userId: number, league: string): Promise<number> {
        const result = await this.userRepository.updateUserLeague(userId, league);
        return result;
    }
}