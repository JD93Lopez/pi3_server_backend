export interface GetUserPlayStatsUseCasePort {
    getUserPlayStats(id_user: number): Promise<any>;
}