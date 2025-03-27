import GetUserStreakServicePort from "../../../domain/ports/driver/service/GetUserStreakServicePort";
import GetUserStreakUseCasePort from "../../../domain/ports/driver/usecase/GetUserStreakUseCasePort";

export default class GetUserStreakUseCase implements GetUserStreakUseCasePort {
    
    constructor(private getUserStreakService: GetUserStreakServicePort){}

    async getUserStreak(userId: number): Promise<number> {

        const res = await this.getUserStreakService.getUserStreak(userId);
    
        
        return res
    }
}

