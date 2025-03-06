import PlayedDayCreateServicePort from "../../../domain/ports/driver/service/PlayedDayCreateServicePort";
import CreatePlayedDayUseCasePort from "../../../domain/ports/driver/usecase/CreatePlayedDayUseCasePort";
import { PlayedDayInterface } from "../../../domain/types/PlayedDaysInterface";
import PlayedDayHelper from "../../helper/PlayedDayHelper";

export default class CreatePlayedDayUseCase implements CreatePlayedDayUseCasePort {
    
    constructor(private playedDayCreateService: PlayedDayCreateServicePort) {}

    createPlayedDay(id_user: number, playedDay: PlayedDayInterface): Promise<number> {

        const playedDayDomain = PlayedDayHelper.endpointToDomain(playedDay);    
        return this.playedDayCreateService.createPlayedDay(id_user, playedDayDomain);
    
    }
    
}