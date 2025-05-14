import RouterExpress from "../../../../express/domain/RouterExpress";
import UserRouterExpressPort from "../../../domain/ports/driver/router/UserRouterExpressPort";
import UserControllerExpressv2 from "../controller/UserControllerExpressV2";

export default class UserRouterExpressV2 extends RouterExpress implements UserRouterExpressPort {


    constructor(
        private readonly userController: UserControllerExpressv2,
    ) {
        super()
        this.routes()
    }

    public routes = (): void => {
        this.getUserRoutes()
    }

    async getUserRoutes() {
        
        this.router.post(
            '/user/creation',
            this.userController.createUser.bind(this.userController)
        ),
            this.router.post(
            "/user/login",
            this.userController.loginUser.bind(this.userController)
        ),
         this.router.post(
            "/user/send/code",
            this.userController.sendVerificationCode.bind(this.userController)
        ),
        this.router.post(
            "/user/verify/code",
            this.userController.verifyCode.bind(this.userController)
        )
        this.router.get(
            "/user/verfy/token",
            this.userController.isTokenValid.bind(this.userController)
        )
        this.router.post(
            "/user/checkUserExists",
            this.userController.checkUserExists.bind(this.userController)
        )
    }
}