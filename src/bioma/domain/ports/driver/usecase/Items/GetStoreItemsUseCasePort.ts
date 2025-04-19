export default interface GetStoreItemsUseCasePort {
    getStoreItems(user_id: number): Promise<any[]>
}