import GetDaysSinceLastXPActivityServicePort from "../../../domain/ports/driver/service/Users/getDaysSinceLastXPActivityServicePort";

export default class GetDaysSinceLastXPActivityUseCase implements GetDaysSinceLastXPActivityServicePort {

    constructor( private service: GetDaysSinceLastXPActivityServicePort){}
    async getDaysSinceLastXPActivity(userId: number): Promise<number> {

        const daysSinceLastActivity = await this.service.getDaysSinceLastXPActivity(userId);
        return daysSinceLastActivity;

    }   
}