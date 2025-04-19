export default interface GetTotalBalanceUseCasePort {
    getTotalBalance(user_id: number): Promise<number>
}