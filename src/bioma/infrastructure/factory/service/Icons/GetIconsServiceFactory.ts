import { GetIconsService } from "../../../../application/service/Icons/GetIconsService";
import { GetIconsServicePort } from "../../../../domain/ports/driver/service/Icons/GetIconsServicePort";
import IconRepositoryFactory from "../../repository/IconRepositoryFactory";

export default class GetIconsServiceFactory {
  public static readonly get = (): GetIconsServicePort => {
    const repository = IconRepositoryFactory.get();

    return new GetIconsService(repository);
  };
}