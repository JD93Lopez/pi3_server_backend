import GetSelectedItemService from "../../../../application/service/Users/GetSelectedItemService";
import GetSelectedItemServicePort from "../../../../domain/ports/driver/service/Users/GetSelectedItemServicePort";
import UserRepositoryFactory from "../../repository/UserRepositoryFactory";

export default class GetSelectedItemServiceFactory {
    public static readonly create = (): GetSelectedItemServicePort => {
        const repository = UserRepositoryFactory.create();
        return new GetSelectedItemService(repository);
    };
}
    
