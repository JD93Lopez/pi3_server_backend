
export interface BuyItemServicePort {
    buyItem(user_id: number, item_id: number): Promise<number>
}