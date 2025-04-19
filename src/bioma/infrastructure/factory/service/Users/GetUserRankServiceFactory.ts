import GetUserRankService from "../../../../application/service/Users/GetUserRankService";
import GetUserRankServicePort from "../../../../domain/ports/driver/service/Users/GetUserRankServicePort";
import UserRepositoryFactory from "../../repository/UserRepositoryFactory";

export default class GetUserRankServiceFactory {
  public static readonly create = (): GetUserRankServicePort => {
    const repository = UserRepositoryFactory.create();
    return new GetUserRankService(repository);
  };
}