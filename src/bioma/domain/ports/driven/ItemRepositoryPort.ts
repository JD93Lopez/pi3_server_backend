export interface ItemRepositoryPort {
    buyItem(user_id: number, item_id: number): Promise<number>
    getStoreItems(user_id: number): Promise<any[]>;

}    