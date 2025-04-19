import { TournamentManagerService } from "../../../../torneo/application/service/TournamentManagerService";
import PlayedDayCreateServicePort from "../../../domain/ports/driver/service/PlayedDays/PlayedDayCreateServicePort";
import CreatePlayedDayUseCasePort from "../../../domain/ports/driver/usecase/PlayedDays/CreatePlayedDayUseCasePort";
import { PlayedDayInterface } from "../../../domain/types/PlayedDaysInterface";
import PlayedDayHelper from "../../helper/PlayedDayHelper";

export default class CreatePlayedDayUseCase implements CreatePlayedDayUseCasePort {

    private readonly tournamentManagerService = new TournamentManagerService().getInstance();
    
    constructor(private playedDayCreateService: PlayedDayCreateServicePort) {}

    createPlayedDay(id_user: number, playedDay: PlayedDayInterface): Promise<number> {
        const playedDayDomain = PlayedDayHelper.endpointToDomain(playedDay);    

        this.tournamentManagerService.anadirExperiencia(id_user, playedDayDomain.getReceivedXp());

        return this.playedDayCreateService.createPlayedDay(id_user, playedDayDomain);
    }

    
}