import DeleteUserCascadaService from "../../../../application/service/Users/DeleteUserCascadaService";
import { DeleteUserCascadaServicePort } from "../../../../domain/ports/driver/service/Users/DeleteUserCascadaServicePort";
import UserRepositoryFactory from "../../repository/UserRepositoryFactory";

export default class DeleteUserCascadaServiceFactory {
    public static readonly create = (): DeleteUserCascadaServicePort => {
        const userRepository = UserRepositoryFactory.create();
        return new DeleteUserCascadaService(userRepository);
    }
}