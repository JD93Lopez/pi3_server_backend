import GetLast31DaysService from "../../../../application/service/PlayedDays/GetLast31DaysService";
import { GetLast31DaysServicePort } from "../../../../domain/ports/driver/service/PlayedDays/GetLast31DaysServicePort";
import PlayedDayRepositoryFactory from "../../repository/PlayedDayRepositoryFactory";

export default class GetLast31DaysServiceFactory {
  public static readonly create = (): GetLast31DaysServicePort => {
    const repository = PlayedDayRepositoryFactory.create();
    return new GetLast31DaysService(repository);
  };
}