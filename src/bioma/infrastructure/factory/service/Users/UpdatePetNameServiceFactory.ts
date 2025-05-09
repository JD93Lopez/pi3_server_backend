import UpdatePetNameService from "../../../../application/service/Users/UpdatePetNameService";
import UpdatePetNameServicePort from "../../../../domain/ports/driver/usecase/Users/UpdatePetNameUseCasePort";
import UserRepositoryFactory from "../../repository/UserRepositoryFactory";

export default class UpdatePetNameServiceFactory {
    public static readonly create = (): UpdatePetNameServicePort => {
        const userRepository = UserRepositoryFactory.create();
        return new UpdatePetNameService(userRepository);
    }
}