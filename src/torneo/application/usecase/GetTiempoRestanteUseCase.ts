import GetTiempoRestanteUseCasePort from "../../domain/ports/driver/usecase/GetTiempoRestanteUseCasePort";
import { TournamentManagerService } from "../service/TournamentManagerService";

export default class GetTiempoRestanteUseCase implements GetTiempoRestanteUseCasePort {
    
    private readonly tournamentManager = new TournamentManagerService().getInstance();

    constructor() {}

    getTiempoRestante(userId: number): number {
        return this.tournamentManager.estaInscritoObtenerTiempoRestante(userId);
    }
}
