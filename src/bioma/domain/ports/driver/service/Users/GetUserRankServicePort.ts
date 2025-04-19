export default interface GetUserRankServicePort{
    getUserRank(user_id: number): Promise<string>
}