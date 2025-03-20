import { CreateUserService } from "../../../application/service/Users/CreateUserService";
import { CreateUserServicePort } from "../../../domain/ports/driver/service/CreateUserServicePort";
import UserRepositoryFactory from "../repository/UserRepositoryFactory";

export default class CreateUserServiceFactory {
    public static readonly create = (): CreateUserServicePort  => {
        const repository = UserRepositoryFactory.create()
        return new CreateUserService(repository)
    }
}