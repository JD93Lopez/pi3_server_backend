import GetTotalBalanceServicePort from "../../../domain/ports/driver/service/Users/GetTotalBalanceServicePort";
import { UserRepositoryPort } from "../../../domain/ports/driven/UserRepositoryPort";


export default class GetTotalBalanceService implements GetTotalBalanceServicePort {
    constructor(private userRepo: UserRepositoryPort) {}
    async getTotalBalance(user_id: number): Promise<number> {
        const totalBalance = await this.userRepo.getTotalBalance(user_id);
        if (totalBalance === undefined || totalBalance === null) {
            throw new Error("User not found");
        }
        return totalBalance;
    }
    
    
    

    }