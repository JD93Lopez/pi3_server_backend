import RouterExpress from "../../../../express/domain/RouterExpress";
import UserControllerExpressPort from "../../../domain/ports/driver/controller/UserControllerExpressPort";
import UserRouterExpressPort from "../../../domain/ports/driver/router/UserRouterExpressPort";

export default class UserRouterExpress extends RouterExpress implements UserRouterExpressPort {


    constructor(
        public userController: UserControllerExpressPort,

    ) {
        super()
        this.routes()
    }

    public routes = (): void => {
        this.getUserRoutes()
    }

    async getUserRoutes() {
        this.router.put(
            "/user/update/experience",
            this.userController.updateUserExperience.bind(this.userController)
        )
        this.router.post(
            "/user/streak",
            this.userController.getUserStreak.bind(this.userController)
        ),
        this.router.delete(
            '/user/:id',
            this.userController.deleteUserById.bind(this.userController)
        ),
        this.router.post(
            "/user/balance",
            this.userController.getTotalBalance.bind(this.userController)
        ),
        this.router.post(
            "/user/inactivity",
            this.userController.getDaysSinceLastXPActivity.bind(this.userController)
        )
        this.router.post(
            "/user/selectedItem",
            this.userController.saveSelectedItem.bind(this.userController)
        )
        this.router.get(
            "/user/selectedItem/:id",
            this.userController.getSelectedItem.bind(this.userController)
        )
        this.router.post(
            "/user/profile",
            this.userController.updateUserProfile.bind(this.userController)
        )
        this.router.put(
            "/user/update/petName",
            this.userController.updatePetName.bind(this.userController)
        )

    }
}