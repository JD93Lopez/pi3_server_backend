import GetDaysSinceLastXPActivityServicePort from "../../../domain/ports/driver/service/Users/GetDaysSinceLastXPActivityServicePort";

export default class GetDaysSinceLastXPActivityUseCase implements GetDaysSinceLastXPActivityServicePort {

    constructor( private service: GetDaysSinceLastXPActivityServicePort){}
    async getDaysSinceLastXPActivity(userId: number): Promise<number> {

        const daysSinceLastActivity = await this.service.getDaysSinceLastXPActivity(userId);
        return daysSinceLastActivity;

    }   
}