import RouterExpress from "../../../../express/domain/RouterExpress";
import UserControllerExpressPort from "../../../domain/ports/driver/controller/UserControllerExpressPort";
import UserRouterExpressPort from "../../../domain/ports/driver/router/UserRouterExpressPort";

export default class UserRouterExpress extends RouterExpress implements UserRouterExpressPort{
    constructor(private readonly userController: UserControllerExpressPort){
        super()
        this.routes()
    }
    public routes = (): void => {
        this.getUserRoutes()
    }
    public getUserRoutes = (): void => {
        this.router.post(
            '/v1.0/user/creation',
            this.userController.createUser.bind(this.userController)
        )
    }
}