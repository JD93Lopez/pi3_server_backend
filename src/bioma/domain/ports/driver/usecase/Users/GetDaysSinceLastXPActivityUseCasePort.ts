export default interface GetDaysSinceLastXPActivityUseCasePort {
    getDaysSinceLastXPActivity(userId: number): Promise<number>;
}