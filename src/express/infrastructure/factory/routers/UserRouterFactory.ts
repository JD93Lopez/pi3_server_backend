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
import GetDaysSinceLastXPActivityServiceFactory from "../../../../bioma/infrastructure/factory/service/Users/GetDaysSinceLastXPActivityServiceFactory"
import GetDaysSinceLastXPActivityUseCase from "../../../../bioma/application/usecase/Users/GetDaysSinceLastXPActivityUseCase"
import SaveSelectedItemServiceFactory from "../../../../bioma/infrastructure/factory/service/Users/SaveSelectedItemServiceFactory"
import SaveSelectedItemUseCase from "../../../../bioma/application/usecase/Users/SaveSelectedItemUseCase"
import GetSelectedItemServiceFactory from "../../../../bioma/infrastructure/factory/service/Users/GetSelectedItemServiceFactory"
import GetSelectedItemUseCase from "../../../../bioma/application/usecase/Users/GetSelectedItemUseCase"
import SendVerificationCodeUserCase from "../../../../bioma/application/usecase/Users/SendVerificationCodeUserCase"
import { EmailService } from "../../../../bioma/application/service/Users/EmailService"
import VerifyCodeUseCase from "../../../../bioma/application/usecase/Users/VerifyCodeUseCase"
import UpdateUserProfileServiceFactory from "../../../../bioma/infrastructure/factory/service/Users/UpdateUserProfileServiceFactory"
import UpdateProfileUseCase from "../../../../bioma/application/usecase/Users/UpdateProfileUseCase"
import UpdatePetNameServiceFactory from "../../../../bioma/infrastructure/factory/service/Users/UpdatePetNameServiceFactory"
import UpdatePetNameUseCase from "../../../../bioma/application/usecase/Users/UpdatePetNameUseCase"
import CheckUserExistsServiceFactory from "../../../../bioma/infrastructure/factory/service/Users/CheckUserExistsServiceFactory"
import CheckUserExistsUseCase from "../../../../bioma/application/usecase/Users/CheckUserExistsUseCase"



export default class UserRouterFactory {

    public static readonly create = (): RouterExpress => {
        // --------- CREATE USER  ----------------
        const userCreateService = CreateUserServiceFactory.create()
        const checkUserExistsService = CheckUserExistsServiceFactory.create()
        const userCreateUseCase = new CreateUserUseCase(userCreateService, checkUserExistsService)

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

    
        // ---------- Days of inactivity ---------------
        const getDaysInactivity = GetDaysSinceLastXPActivityServiceFactory.create()
        const getDaysInactivityUseCase = new GetDaysSinceLastXPActivityUseCase(getDaysInactivity)

        const saveSelectedItemService = SaveSelectedItemServiceFactory.create()
        const saveSelectedItemUseCase = new SaveSelectedItemUseCase(saveSelectedItemService)


        const getSelectedItemService = GetSelectedItemServiceFactory.create()
        const getSelectedItemUseCase = new GetSelectedItemUseCase(getSelectedItemService)

        // ---------- Send verification code ---------------
        const emailService = new EmailService();
        const sendVerificationCodeUseCase = new SendVerificationCodeUserCase(emailService);
        const verifyCodeUseCase = new VerifyCodeUseCase(emailService);

        const updateUserProfileService = UpdateUserProfileServiceFactory.create()
        const userUpdateProfileUseCase  = new UpdateProfileUseCase(updateUserProfileService);

        const updatePetNameService = UpdatePetNameServiceFactory.create()
        const updatePetNameUseCase = new UpdatePetNameUseCase(updatePetNameService)

        // --------- CHECK IF USER EXISTS  ----------------
        const userExistsService = CheckUserExistsServiceFactory.create()
        const userExistsUseCase = new CheckUserExistsUseCase(userExistsService)
        
        const userController = new UserControllerExpress(
          userUpdateExUseCase, userCreateUseCase, userGetStreakUseCase, 
          userLoginUseCase , deleteUserCascadaUseCase, getTotalBalanceUseCase, 
          getDaysInactivityUseCase, saveSelectedItemUseCase, getSelectedItemUseCase, 
          sendVerificationCodeUseCase, verifyCodeUseCase, userUpdateProfileUseCase, 
          updatePetNameUseCase, userExistsUseCase,
        )


        const userRouter = new UserRouterExpress(userController)
        
        return userRouter

    }

}