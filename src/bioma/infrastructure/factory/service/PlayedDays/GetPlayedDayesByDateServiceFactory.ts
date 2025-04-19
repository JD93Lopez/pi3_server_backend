
import GetPlayedDaysByDateService from "../../../../application/service/PlayedDays/GetPlayedDayesByDateService";
import GetPlayedDaysByDateServicePort from "../../../../domain/ports/driver/service/PlayedDays/GetPlayedDaysByDateServicePort";
import PlayedDayRepositoryFactory from "../../repository/PlayedDayRepositoryFactory";

export default class GetPlayedDaysByDateServiceFactory {
    public static readonly create = (): GetPlayedDaysByDateServicePort => {
        const repository = PlayedDayRepositoryFactory.create();
        return new GetPlayedDaysByDateService(repository);
    }
}