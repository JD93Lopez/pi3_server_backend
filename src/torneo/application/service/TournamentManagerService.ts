import { TournamentManager } from "../../domain/model/TournamentManager";

export class TournamentManagerService {
    
    private static tournamentManager: TournamentManager;

    constructor() {
        if (!TournamentManagerService.tournamentManager) {
            TournamentManagerService.tournamentManager = new TournamentManager();
        }
    }

    public getInstance(): TournamentManager {
        return TournamentManagerService.tournamentManager;
    }

}
