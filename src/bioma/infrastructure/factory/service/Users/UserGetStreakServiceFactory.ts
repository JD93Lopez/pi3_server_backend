import GetUserStreakService from "../../../../application/service/Users/GetUserStreakService";
import GetUserStreakServicePort from "../../../../domain/ports/driver/service/Users/GetUserStreakServicePort";
import UserRepositoryFactory from "../../repository/UserRepositoryFactory";

export default class UserGetStreakServiceFactory {
    public static readonly create = (): GetUserStreakServicePort=> {
        const userRepository = UserRepositoryFactory.create();
        return new GetUserStreakService(userRepository);
    }
}