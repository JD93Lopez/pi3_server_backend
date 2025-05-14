import { JWTService } from "../../../../bioma/application/service/Users/JWTService"
import LoginUseCase from "../../../../bioma/application/usecase/Users/LoginUseCase"
import CreateUserUseCase from "../../../../bioma/application/usecase/Users/CreateUserUseCase"
import CreateUserServiceFactory from "../../../../bioma/infrastructure/factory/service/Users/CreateUserServiceFactory"
import LoginServiceFactory from "../../../../bioma/infrastructure/factory/service/Users/LoginServiceFactory"
import RouterExpress from "../../../domain/RouterExpress"
import SendVerificationCodeUserCase from "../../../../bioma/application/usecase/Users/SendVerificationCodeUserCase"
import { EmailService } from "../../../../bioma/application/service/Users/EmailService"
import VerifyCodeUseCase from "../../../../bioma/application/usecase/Users/VerifyCodeUseCase"
import JWTUseCase from "../../../../bioma/application/usecase/Users/JWTUseCase"
import CheckUserExistsServiceFactory from "../../../../bioma/infrastructure/factory/service/Users/CheckUserExistsServiceFactory"
import CheckUserExistsUseCase from "../../../../bioma/application/usecase/Users/CheckUserExistsUseCase"
import UserControllerExpressv2 from "../../../../bioma/infrastructure/express/controller/UserControllerExpressV2"
import UserRouterExpressV2 from "../../../../bioma/infrastructure/express/router/UserRouterExpressV2"



export default class UserRouterFactoryV2 {

    public static readonly create = (): RouterExpress => {

        // --------- CREATE USER  ----------------
        const userCreateService = CreateUserServiceFactory.create()
        const checkUserExistsService = CheckUserExistsServiceFactory.create()
        const userCreateUseCase = new CreateUserUseCase(userCreateService, checkUserExistsService)

        // --------- User Login  ----------------
        const userValidationService = LoginServiceFactory.create()
        const userLoginUseCase = new LoginUseCase(userValidationService)

        
        // ---------- Send verification code ---------------
        const emailService = new EmailService();
        const sendVerificationCodeUseCase = new SendVerificationCodeUserCase(emailService);
        // ---------- Verify code ---------------
        const verifyCodeUseCase = new VerifyCodeUseCase(emailService);
        
        // --------- CHECK IF USER EXISTS  ----------------
        const userExistsService = CheckUserExistsServiceFactory.create()
        const userExistsUseCase = new CheckUserExistsUseCase(userExistsService)

        // ---------- JWT ----------------
        const userJwtService = new JWTService();
        const jwtUseCase = new JWTUseCase(userJwtService);
                
        const userController = new UserControllerExpressv2(
          userLoginUseCase,
          jwtUseCase,
          sendVerificationCodeUseCase,
          verifyCodeUseCase,
          userExistsUseCase,
          userCreateUseCase 
        )


        const userRouter = new UserRouterExpressV2(userController)
        
        return userRouter

    }

}