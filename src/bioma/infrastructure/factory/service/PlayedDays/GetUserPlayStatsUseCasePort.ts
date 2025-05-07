import GetUserPlayStatsService from "../../../../application/service/PlayedDays/GetUserPlayStatsService";
import { GetUserPlayStatsServicePort } from "../../../../domain/ports/driver/service/PlayedDays/GetUserPlayStatsServicePort";
import PlayedDayRepositoryFactory from "../../repository/PlayedDayRepositoryFactory";

export default class GetUserPlayStatsServiceFactory {
  public static readonly create = (): GetUserPlayStatsServicePort => {
    const repository = PlayedDayRepositoryFactory.create();
    return new GetUserPlayStatsService(repository);
  };
}