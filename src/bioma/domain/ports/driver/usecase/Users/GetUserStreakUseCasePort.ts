export default interface GetUserStreakUseCasePort {
    getUserStreak(userId: number): Promise<number>;
}