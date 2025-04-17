import GetTotalBalanceService from "../../../../application/service/Users/GetTotalBalanceService";
import GetTotalBalanceServicePort from "../../../../domain/ports/driver/service/Users/GetTotalBalanceServicePort";
import UserRepositoryFactory from "../../repository/UserRepositoryFactory";

export default class GetTotalBalanceServiceFactory {
  public static readonly create = (): GetTotalBalanceServicePort => {
    const repository = UserRepositoryFactory.create();
    return new GetTotalBalanceService(repository);
  };
}