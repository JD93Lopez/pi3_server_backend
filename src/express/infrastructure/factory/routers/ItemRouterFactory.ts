import BuyItemUseCase from "../../../../bioma/application/usecase/Items/BuyItemUseCase"
import ItemControllerExpress from "../../../../bioma/infrastructure/express/controller/ItemControllerExpress"
import ItemRouterExpress from "../../../../bioma/infrastructure/express/router/ItemRouterExpress"
import BuyItemServiceFactory from "../../../../bioma/infrastructure/factory/service/Items/BuyItemServiceFactory"
import RouterExpress from "../../../domain/RouterExpress"
import GetStoreItemsUseCase from "../../../../bioma/application/usecase/Items/GetStoreItemsUseCase"
import GetStoreItemsServiceFactory from "../../../../bioma/infrastructure/factory/service/Items/GetStoreItemsServiceFactory"

export default class ItemRouterFactory{
    public static readonly create = (): RouterExpress => {
    
        // ------BUY ITEM ----------------

        const buyItemService = BuyItemServiceFactory.create()
        const buyItemUseCase = new BuyItemUseCase(buyItemService)

        const GetStoreItemsService= GetStoreItemsServiceFactory.create()
        const GetStoreItems = new GetStoreItemsUseCase(GetStoreItemsService)

        
        const itemController = new ItemControllerExpress(buyItemUseCase, GetStoreItems)

        const userRouter = new ItemRouterExpress(itemController)
        
        return userRouter

    }

}