import CreateUserUseCase from "../../../../bioma/application/usecase/Users/CreateUserUseCase";
import UserControllerExpress from "../../../../bioma/infrastructure/express/controller/UserControllerExpress";
import UserRouterExpress from "../../../../bioma/infrastructure/express/router/UserRouterExpress";
import CreateUserServiceFactory from "../../../../bioma/infrastructure/factory/service/CreateUserServiceFactory";
import RouterExpress from "../../../domain/RouterExpress";

export default class UserRouterFactory {
    public static readonly create = (): RouterExpress => {
        // --------- CREATE USER  ----------------
        const userCreateService = CreateUserServiceFactory.create()
        const userCreateUseCase = new CreateUserUseCase(userCreateService)

        const userController = new UserControllerExpress(userCreateUseCase)
        const userRouter = new UserRouterExpress(userController)

        return userRouter
    }
}