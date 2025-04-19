import UserHelper from "../../../bioma/application/helper/UserHelper";
import GetUserRankServicePort from "../../../bioma/domain/ports/driver/service/Users/GetUserRankServicePort";
import { UserInterface } from "../../../bioma/domain/types/UserInterface";
import InscribirTorneoUseCasePort from "../../domain/ports/driver/usecase/InscribirTorneoUseCasePort";
import { TournamentManagerService } from "../service/TournamentManagerService";

export default class InscribirTorneoUseCase implements InscribirTorneoUseCasePort {
    
    private readonly tournamentManagerService = new TournamentManagerService().getInstance()
    
    constructor(
        private readonly getUserRankService: GetUserRankServicePort
    ) {}
    
    async inscribirTorneo(userInterface: UserInterface): Promise<any> {
        
        const userHelper = new UserHelper();
        const userDomain = userHelper.endpointToDomainUser(userInterface);

        userDomain.setXp(0);
        userDomain.setStreak(0);

        userDomain.setRank(await this.getUserRankService.getUserRank(userDomain.getIdUser()));

        return this.tournamentManagerService.inscribir(userDomain);
    }
}