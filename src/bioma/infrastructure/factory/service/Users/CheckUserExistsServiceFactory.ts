import { CheckUserExistsService } from "../../../../application/service/Users/CheckUserExistsService";
import { CheckUserExistsServicePort } from "../../../../domain/ports/driver/service/Users/CheckUserExistsServicePort";
import UserRepositoryFactory from "../../repository/UserRepositoryFactory";

export default class CheckUserExistsServiceFactory {
    public static readonly create = (): CheckUserExistsServicePort => {
        const repository = UserRepositoryFactory.create();
        return new CheckUserExistsService(repository);
    };
}