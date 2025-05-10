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
            '/v1.0/user/creation',
            this.userController.createUser.bind(this.userController)
        ),
        this.router.post(
            "/v1.0/user/streak",
            this.userController.getUserStreak.bind(this.userController)
        ),
        this.router.delete(
            '/v1.0/user/:id',
            this.userController.deleteUserById.bind(this.userController)
        ),
        this.router.post(
            "/v1.0/user/login",
            this.userController.loginUser.bind(this.userController)
        ),
        this.router.post(
            "/v1.0/user/balance",
            this.userController.getTotalBalance.bind(this.userController)
        ),
        this.router.post(
            "/v1.0/user/inactivity",
            this.userController.getDaysSinceLastXPActivity.bind(this.userController)
        ),
        this.router.post(
            "/v1.0/user/send/code",
            this.userController.sendVerificationCode.bind(this.userController)
        ),
        this.router.post(
            "/v1.0/user/verify/code",
            this.userController.verifyCode.bind(this.userController)
        )
        this.router.post(
            "/v1.0/user/selectedItem",
            this.userController.saveSelectedItem.bind(this.userController)
        )
        this.router.get(
            "/v1.0/user/selectedItem/:id",
            this.userController.getSelectedItem.bind(this.userController)
        )
        this.router.post(
            "/v1.0/user/profile",
            this.userController.updateUserProfile.bind(this.userController)
        )
        this.router.put(
            "/v1.0/user/update/petName",
            this.userController.updatePetName.bind(this.userController)
        )
        this.router.post(
            "/v1.0/user/checkUserExists",
            this.userController.checkUserExists.bind(this.userController)
        )
    }
}