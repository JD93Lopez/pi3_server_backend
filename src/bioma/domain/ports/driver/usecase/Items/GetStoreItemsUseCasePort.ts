import AbstractItem from "../../../../model/item/AbstractItem";

export default interface GetStoreItemsUseCasePort {
    getStoreItems(user_id: number): Promise<AbstractItem[]>
}