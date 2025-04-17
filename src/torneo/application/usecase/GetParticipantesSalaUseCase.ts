import { AbstractUser } from "../../../bioma/domain/model/user/AbstractUser";
import GetParticipantesSalaUseCasePort from "../../domain/ports/driver/usecase/GetParticipantesSalaUseCasePort";
import { TournamentManagerService } from "../service/TournamentManagerService";

export default class GetParticipantesSalaUseCase implements GetParticipantesSalaUseCasePort {

    
    private readonly tournamentManagerService = new TournamentManagerService().getInstance()

    constructor(){}

     getParticipantesSala(userId: number, league: string): AbstractUser[] {

        
            const tournamentResponse =  this.tournamentManagerService.estaParticipandoObtenerSala( userId, league);

            console.log("tournamentResponse", tournamentResponse)
            if(tournamentResponse == null) return []
            
            if(tournamentResponse.length == 0) return []

            return tournamentResponse 
            
    }
    getTiempoRestante(userId: number): number {
        const tournamentManager = this.tournamentManagerService.estaInscritoObtenerTiempoRestante(userId);

        return tournamentManager
    }
}