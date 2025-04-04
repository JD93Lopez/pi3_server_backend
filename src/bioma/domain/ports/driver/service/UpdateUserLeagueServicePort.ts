export default interface UpdateUserLeagueExperienceServicePort {
    updateUserLeague(userId: number, league: string): Promise<number>;
}