import GetTotalBalanceServicePort from "../../../domain/ports/driver/service/Users/GetTotalBalanceServicePort";
import GetTotalBalanceUseCasePort from "../../../domain/ports/driver/usecase/Users/GetTotalBalanceUseCasePort";


export default class GetTotalBalanceUseCase implements GetTotalBalanceUseCasePort {
    
    constructor(private getTotalBalanceService: GetTotalBalanceServicePort){}

    async getTotalBalance(user_id: number): Promise<number> {

        const res = await this.getTotalBalanceService.getTotalBalance(user_id);
        return res
    }
}