import { UserRepositoryPort } from "../../../domain/ports/driven/UserRepositoryPort";
import GetUserRankServicePort from "../../../domain/ports/driver/service/Users/GetUserRankServicePort";


export default class GetUserRankService implements GetUserRankServicePort {

    constructor(private userRepo: UserRepositoryPort) {}
    
    async getUserRank(user_id: number): Promise<string> {
        const rank = await this.userRepo.getRank(user_id);
        return rank;
    }
    
}