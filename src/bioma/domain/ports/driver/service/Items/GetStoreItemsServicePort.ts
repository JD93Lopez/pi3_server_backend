export interface GetStoreItemsServicePort {
    getStoreItems(user_id: number): Promise<any[]>;
}