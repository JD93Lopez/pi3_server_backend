import BuyItemService from "../../../../application/service/Items/BuyItemService";
import BuyItemUseCasePort from "../../../../domain/ports/driver/usecase/Items/BuyItemUseCasePort";
import ItemRepositoryFactory from "../../repository/ItemRepositoryFactory";

export default class BuyItemServiceFactory {
    public static readonly create = (): BuyItemUseCasePort => {
        const itemRepository = ItemRepositoryFactory.create();
        return new BuyItemService(itemRepository);
    }
}