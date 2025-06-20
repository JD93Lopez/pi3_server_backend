import { AbstractUser } from "../../../bioma/domain/model/user/AbstractUser";
import GetParticipantesSalaUseCasePort from "../../domain/ports/driver/usecase/GetParticipantesSalaUseCasePort";
import { TournamentManagerService } from "../service/TournamentManagerService";

export default class GetParticipantesSalaUseCase implements GetParticipantesSalaUseCasePort {

    
    private readonly tournamentManagerService = new TournamentManagerService().getInstance()

    constructor(){}

    getParticipantesSala(userId: number, league: string): AbstractUser[] {
        const tournamentResponse =  this.tournamentManagerService.estaParticipandoObtenerSala( userId, league);

        if(tournamentResponse == null) return []
        
        if(tournamentResponse.length == 0) return []

        return tournamentResponse 
    }

}