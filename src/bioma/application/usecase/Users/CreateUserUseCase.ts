import { CheckUserExistsServicePort } from "../../../domain/ports/driver/service/Users/CheckUserExistsServicePort";
import { CreateUserServicePort } from "../../../domain/ports/driver/service/Users/CreateUserServicePort";
import { CreateUserUseCasePort } from "../../../domain/ports/driver/usecase/Users/CreateUserUseCasePort";
import { UserInterface } from "../../../domain/types/UserInterface";
import UserHelper from "../../helper/UserHelper";

export default class CreateUserUseCase implements CreateUserUseCasePort{
    constructor(private createUserService: CreateUserServicePort, private checkUserExistsService: CheckUserExistsServicePort
    ){}
    async createUser(userClient: UserInterface): Promise<number>{
        // Verificar si el usuario ya existe
        const exists = await this.checkUserExistsService.checkUserExists(userClient.user_name);

        if (exists === 0) {
            const userHelper = new UserHelper()

            const user = userHelper.endpointToDomainUser(userClient)
            return this.createUserService.createUser(user)
        }else if(exists === 1){
            return -1
        }

        return 0
    }
}