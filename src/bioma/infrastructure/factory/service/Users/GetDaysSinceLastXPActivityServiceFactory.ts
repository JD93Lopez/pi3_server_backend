
import GetDaysSinceLastXPActivityService from "../../../../application/service/Users/GetDaysSinceLastXPActivityService";
import GetDaysSinceLastXPActivityServicePort from "../../../../domain/ports/driver/service/Users/getDaysSinceLastXPActivityServicePort";
import UserRepositoryFactory from "../../repository/UserRepositoryFactory";

export default class GetDaysSinceLastXPActivityServiceFactory {
  public static readonly create = (): GetDaysSinceLastXPActivityServicePort => {
    const userRepository = UserRepositoryFactory.create();
    return new GetDaysSinceLastXPActivityService(userRepository);
  };
}