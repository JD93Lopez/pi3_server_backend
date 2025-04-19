import GetStoreItemsService from "../../../../application/service/Items/GetStoreItemsService";
import GetStoreItemsUseCasePort from "../../../../domain/ports/driver/usecase/Items/GetStoreItemsUseCasePort";
import ItemRepositoryFactory from "../../repository/ItemRepositoryFactory";

export default class GetStoreItemsServiceFactory {
    public static readonly create = (): GetStoreItemsUseCasePort => {
        const itemRepository = ItemRepositoryFactory.create();
        return new GetStoreItemsService(itemRepository);
    }

}