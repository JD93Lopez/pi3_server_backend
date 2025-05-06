export default interface GetDaysSinceLastXPActivityServicePort {
    getDaysSinceLastXPActivity(userId: number): Promise<number>;
}