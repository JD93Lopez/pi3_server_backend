import UpdateProfileService from "../../../../application/service/Users/UpdateProfileService";
import UpdateUserProfileServicePort from "../../../../domain/ports/driver/service/Users/UpdateUserProfileServicePort";
import UserRepositoryFactory from "../../repository/UserRepositoryFactory";

export default class UpdateUserProfileServiceFactory {
    public static readonly create = (): UpdateUserProfileServicePort  => {
        const repository = UserRepositoryFactory.create()
        return new UpdateProfileService(repository)
    }
}