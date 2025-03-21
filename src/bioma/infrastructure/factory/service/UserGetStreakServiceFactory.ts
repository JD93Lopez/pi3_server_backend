import GetUserStreakService from "../../../application/service/User/GetUserStreakService";
import GetUserStreakServicePort from "../../../domain/ports/driver/service/GetUserStreakServicePort";
import UserRepositoryFactory from "../repository/UserRepositoryFactory";

export default class UserGetStreakServiceFactory {
    public static readonly create = (): GetUserStreakServicePort=> {
        const userRepository = UserRepositoryFactory.create();
        return new GetUserStreakService(userRepository);
    }
}