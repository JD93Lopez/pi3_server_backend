export default interface GetTotalBalanceServicePort{
    getTotalBalance(user_id: number): Promise<number>
}