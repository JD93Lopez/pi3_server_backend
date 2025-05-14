import GetUserStreakUseCase from "../../../../bioma/application/usecase/Users/GetUserStreakUseCase"
import UpdateUserExperienceUseCase from "../../../../bioma/application/usecase/Users/UpdateUserExperienceUseCase"
import UserControllerExpress from "../../../../bioma/infrastructure/express/controller/UserControllerExpress"
import UserRouterExpress from "../../../../bioma/infrastructure/express/router/UserRouterExpress"
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
import UpdateUserProfileServiceFactory from "../../../../bioma/infrastructure/factory/service/Users/UpdateUserProfileServiceFactory"
import UpdateProfileUseCase from "../../../../bioma/application/usecase/Users/UpdateProfileUseCase"
import UpdatePetNameServiceFactory from "../../../../bioma/infrastructure/factory/service/Users/UpdatePetNameServiceFactory"
import UpdatePetNameUseCase from "../../../../bioma/application/usecase/Users/UpdatePetNameUseCase"



export default class UserRouterFactory {

    public static readonly create = (): RouterExpress => {

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

        
        // ---------- Days of inactivity ---------------
        const getDaysInactivity = GetDaysSinceLastXPActivityServiceFactory.create()
        const getDaysInactivityUseCase = new GetDaysSinceLastXPActivityUseCase(getDaysInactivity)

        const saveSelectedItemService = SaveSelectedItemServiceFactory.create()
        const saveSelectedItemUseCase = new SaveSelectedItemUseCase(saveSelectedItemService)


        const getSelectedItemService = GetSelectedItemServiceFactory.create()
        const getSelectedItemUseCase = new GetSelectedItemUseCase(getSelectedItemService)
        

        
        const updateUserProfileService = UpdateUserProfileServiceFactory.create()
        const userUpdateProfileUseCase  = new UpdateProfileUseCase(updateUserProfileService);
        
        const updatePetNameService = UpdatePetNameServiceFactory.create()
        const updatePetNameUseCase = new UpdatePetNameUseCase(updatePetNameService)

        
        const userController = new UserControllerExpress(
          userUpdateExUseCase, userGetStreakUseCase, deleteUserCascadaUseCase, getTotalBalanceUseCase, 
          getDaysInactivityUseCase, saveSelectedItemUseCase, getSelectedItemUseCase, userUpdateProfileUseCase, 
          updatePetNameUseCase, 
        )


        const userRouter = new UserRouterExpress(userController)
        
        return userRouter

    }

}