export default interface GetTotalBalanceCasePort {
    getTotalBalance(user_id: number): Promise<number>
}