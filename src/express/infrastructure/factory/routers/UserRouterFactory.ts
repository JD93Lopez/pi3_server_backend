import { JWTService } from "../../../../bioma/application/service/Users/JWTService"
import GetUserStreakUseCase from "../../../../bioma/application/usecase/Users/GetUserStreakUseCase"
import LoginUseCase from "../../../../bioma/application/usecase/Users/LoginUseCase"
import UpdateUserExperienceUseCase from "../../../../bioma/application/usecase/Users/UpdateUserExperienceUseCase"
import CreateUserUseCase from "../../../../bioma/application/usecase/Users/CreateUserUseCase"
import UserControllerExpress from "../../../../bioma/infrastructure/express/controller/UserControllerExpress"
import UserRouterExpress from "../../../../bioma/infrastructure/express/router/UserRouterExpress"
import CreateUserServiceFactory from "../../../../bioma/infrastructure/factory/service/Users/CreateUserServiceFactory"
import LoginServiceFactory from "../../../../bioma/infrastructure/factory/service/Users/LoginServiceFactory"
import UserGetStreakServiceFactory from "../../../../bioma/infrastructure/factory/service/Users/UserGetStreakServiceFactory"
import UserUpdateExperienceServiceFactory from "../../../../bioma/infrastructure/factory/service/Users/UserUpdateExperienceServiceFactory"
import RouterExpress from "../../../domain/RouterExpress"
import DeleteUserCascadaServiceFactory from "../../../../bioma/infrastructure/factory/service/Users/DeleteUserCascadaServiceFactory"
import DeleteUserCascadaUseCase from "../../../../bioma/application/usecase/Users/DeleteUserCascadaUseCase"
import GetTotalBalanceServiceFactory from "../../../../bioma/infrastructure/factory/service/Users/GetTotalBalanceServiceFactory"
import GetTotalBalanceUseCase from "../../../../bioma/application/usecase/Users/GetTotalBalanceUseCase"

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

        
        // ------ DELETE USER -------
        const deleteUserCascadaService = DeleteUserCascadaServiceFactory.create()
        const deleteUserCascadaUseCase = new DeleteUserCascadaUseCase(deleteUserCascadaService);

        // ------ GET TOTAL BALANCE USER -------
        const getTotalBalanceService = GetTotalBalanceServiceFactory.create()
        const getTotalBalanceUseCase = new GetTotalBalanceUseCase(getTotalBalanceService);


        // --------- User Login  ----------------
        const userValidationService = LoginServiceFactory.create()
        const userJwtService = new JWTService();
        const userLoginUseCase = new LoginUseCase(userValidationService, userJwtService)

        
        const userController = new UserControllerExpress(userUpdateExUseCase, userCreateUseCase, userGetStreakUseCase, userLoginUseCase , deleteUserCascadaUseCase, getTotalBalanceUseCase)

        const userRouter = new UserRouterExpress(userController)
        
        return userRouter

    }

}