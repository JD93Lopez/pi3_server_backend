export default interface BuyItemUseCasePort{
    buyItem(user_id: number, item_id: number): Promise<number>

}