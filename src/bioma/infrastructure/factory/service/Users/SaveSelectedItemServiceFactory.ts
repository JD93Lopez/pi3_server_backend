
import SaveSelectedItemService from "../../../../application/service/Users/saveSelectedItem";
import SaveSelectedItemServicePort from "../../../../domain/ports/driver/service/Users/SaveSelectedItemServicePort";
import UserRepositoryFactory from "../../repository/UserRepositoryFactory";

export default class SaveSelectedItemServiceFactory {
  public static readonly create = (): SaveSelectedItemServicePort => {
    const repository = UserRepositoryFactory.create();
    return new SaveSelectedItemService(repository);
  };
}