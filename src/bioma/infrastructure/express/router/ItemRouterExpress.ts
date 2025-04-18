import RouterExpress from "../../../../express/domain/RouterExpress"
import ItemControllerExpressPort from "../../../domain/ports/driver/controller/ItemControllerExpressPort"
import ItemRouterExpressPort from "../../../domain/ports/driver/router/ItemRouterExpressPort"

export default class ItemRouterExpress extends RouterExpress implements ItemRouterExpressPort{

    constructor(private readonly itemController: ItemControllerExpressPort) {
            super()
            this.routes()
        }
    gesItemRoutes(): void {
        throw new Error("Method not implemented.")
    }
    
    public routes = (): void => {
            this.getItemRoutes()
    }

    async getItemRoutes()  {
            this.router.post(
                "/v1.0/item/buy",
                this.itemController.buyItem.bind(this.itemController)
            )
    }        
        

}