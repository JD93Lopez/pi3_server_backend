import RouterExpress from "../../../../express/domain/RouterExpress";
import UserControllerExpressPort from "../../../domain/ports/driver/controller/UserControllerExpressPort";
import UserRouterExpressPort from "../../../domain/ports/driver/router/UserRouterExpressPort";

export default class UserRouterExpress extends RouterExpress implements UserRouterExpressPort {

    constructor(public userController: UserControllerExpressPort) {
        super()
        this.routes()
    }

    public routes = (): void => {
        this.getUserRoutes()
    }

    async getUserRoutes() {
        this.router.put(
            "/v1.0/user/update/experience",
            this.userController.updateUserExperience.bind(this.userController)
        ),
        this.router.post(
            "/v1.0/user/streak",
            this.userController.getUserStreak.bind(this.userController)
        )
    }
}