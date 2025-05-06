import { UserRepositoryPort } from "../../../domain/ports/driven/UserRepositoryPort";
import GetDaysSinceLastXPActivityServicePort from "../../../domain/ports/driver/service/Users/getDaysSinceLastXPActivityServicePort";

export default class GetDaysSinceLastXPActivityService implements GetDaysSinceLastXPActivityServicePort{

    constructor(private userRepositoryPort: UserRepositoryPort) {}

    async getDaysSinceLastXPActivity(userId: number): Promise<number> {
       
        const lastDate = await this.userRepositoryPort.getDaysSinceLastXPActivity(userId);

        console.log("Last date from DB:", lastDate); // Debugging line

        if (!lastDate) {
            return 0; // If no date is found, return 0
        }

        const currentDate = new Date();
        const differenceInTime = currentDate.getTime() - lastDate.getTime();
        const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

        return differenceInDays;
    }

    
}