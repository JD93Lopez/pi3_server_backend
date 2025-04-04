export default interface GetUserStreakServicePort  {
    getUserStreak(userId: number): Promise<number>;
}