import { CreateUserServicePort } from "../../../domain/ports/driver/service/CreateUserServicePort";
import { CreateUserUseCasePort } from "../../../domain/ports/driver/usecase/CreateUserUseCasePort";
import { UserInterface } from "../../../domain/types/UserInterface";
import UserHelper from "../../helper/UserHelper";

export default class CreateUserUseCase implements CreateUserUseCasePort{
    constructor(private createUserService: CreateUserServicePort){}
    createUser(userClient: UserInterface): Promise<number>{
        const userHelper = new UserHelper()
        const user = userHelper.endpointToDomainUser(userClient)
        return this.createUserService.createUser(user)
    }
}