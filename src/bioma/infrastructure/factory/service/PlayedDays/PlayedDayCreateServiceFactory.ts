import PlayedDayCreateService from "../../../../application/service/PlayedDays/PlayedDayCreateService";
import PlayedDayCreateServicePort from "../../../../domain/ports/driver/service/PlayedDays/PlayedDayCreateServicePort";
import PlayedDayRepositoryFactory from "../../repository/PlayedDayRepositoryFactory";

export default class PlayedDayCreateServiceFactory {
    public static readonly create = (): PlayedDayCreateServicePort => {
        const playedDayRepo = PlayedDayRepositoryFactory.create();
        return new PlayedDayCreateService(playedDayRepo);
    }
}