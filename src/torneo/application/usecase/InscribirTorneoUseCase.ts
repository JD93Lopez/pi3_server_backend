import UserHelper from "../../../bioma/application/helper/UserHelper";
import { UserInterface } from "../../../bioma/domain/types/UserInterface";
import InscribirTorneoUseCasePort from "../../domain/ports/driver/usecase/InscribirTorneoUseCasePort";
import { TournamentManagerService } from "../service/TournamentManagerService";

export default class InscribirTorneoUseCase implements InscribirTorneoUseCasePort {
    
    private readonly tournamentManagerService = new TournamentManagerService().getInstance()
    
    constructor(
    ) {}
    
    async inscribirTorneo(userInterface: UserInterface): Promise<any> {
        
        const userHelper = new UserHelper();
        const userDomain = userHelper.endpointToDomainUser(userInterface);

        return this.tournamentManagerService.inscribir(userDomain);
    }
}