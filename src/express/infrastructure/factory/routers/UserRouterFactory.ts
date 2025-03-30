import { JWTService } from "../../../../bioma/application/service/User/JWTService"
import GetUserStreakUseCase from "../../../../bioma/application/usecase/User/GetUserStreakUseCase"
import LoginUseCase from "../../../../bioma/application/usecase/User/LoginUseCase"
import UpdateUserExperienceUseCase from "../../../../bioma/application/usecase/User/UpdateUserExperienceUseCase"
import CreateUserUseCase from "../../../../bioma/application/usecase/Users/CreateUserUseCase"
import UserControllerExpress from "../../../../bioma/infrastructure/express/controller/UserControllerExpress"
import UserRouterExpress from "../../../../bioma/infrastructure/express/router/UserRouterExpress"
import CreateUserServiceFactory from "../../../../bioma/infrastructure/factory/service/CreateUserServiceFactory"
import LoginServiceFactory from "../../../../bioma/infrastructure/factory/service/LoginServiceFactory"
import UserGetStreakServiceFactory from "../../../../bioma/infrastructure/factory/service/UserGetStreakServiceFactory"
import UserUpdateExperienceServiceFactory from "../../../../bioma/infrastructure/factory/service/UserUpdateExperienceServiceFactory"
import RouterExpress from "../../../domain/RouterExpress"

export default class UserRouterFactory {

    public static readonly create = (): RouterExpress => {
    // --------- CREATE USER  ----------------
    const userCreateService = CreateUserServiceFactory.create()
    const userCreateUseCase = new CreateUserUseCase(userCreateService)

    // ----- User Update experience -----
    const userUpdateExService = UserUpdateExperienceServiceFactory.create()
    const userUpdateExUseCase = new UpdateUserExperienceUseCase(userUpdateExService)

    // ------ User Get Streak -----
    const userGetStreakService = UserGetStreakServiceFactory.create()
    const userGetStreakUseCase = new GetUserStreakUseCase(userGetStreakService);


    // --------- User Login  ----------------
    const userValidationService = LoginServiceFactory.create()
    const userJwtService = new JWTService();
    const userLoginUseCase = new LoginUseCase(userValidationService, userJwtService)

    
    const userController = new UserControllerExpress(userUpdateExUseCase, userCreateUseCase, userGetStreakUseCase, userLoginUseCase)

    const userRouter = new UserRouterExpress(userController)
    
    return userRouter

    }

}