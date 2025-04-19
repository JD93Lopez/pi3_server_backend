import UpdateUserLeagueService from "../../../../application/service/Users/UpdateUserLeagueService";
import UpdateUserLeagueExperienceServicePort from "../../../../domain/ports/driver/service/Users/UpdateUserLeagueServicePort";
import UserRepositoryFactory from "../../repository/UserRepositoryFactory";

export default class UpdateUserLeagueServiceFactory {
    public static readonly create = (): UpdateUserLeagueExperienceServicePort=> {
        const userRepository = UserRepositoryFactory.create();
        return new UpdateUserLeagueService(userRepository);
    }
}