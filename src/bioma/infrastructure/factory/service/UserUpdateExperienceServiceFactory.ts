import UpdateUserExperienceService from "../../../application/service/User/UpdateUserExperienceService";
import UpdateUserExperienceServicePort from "../../../domain/ports/driver/service/UpdateUserExperienceServicePort";
import UserRepositoryFactory from "../repository/UserRepositoryFactory";

export default class UserUpdateExperienceServiceFactory {
    public static readonly create = (): UpdateUserExperienceServicePort=> {
        const userRepository = UserRepositoryFactory.create();
        return new UpdateUserExperienceService(userRepository);
    }
}