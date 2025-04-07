import { TournamentManager } from "../../domain/model/TournamentManager";

export class TournamentManagerService {
    
    private static tournamentManager: TournamentManager;
    private static settedUp: boolean = false;
    private startDate: Date | null = null;
    private endDate: Date | null = null;

    constructor() {
        if (!TournamentManagerService.tournamentManager) {
            TournamentManagerService.tournamentManager = new TournamentManager();
        }
    }

    private setUp(){
        const now = new Date();
        let delay: number;
        let nextSunday: Date;

        if (this.startDate) {
            delay = this.startDate.getTime() - now.getTime();
        } else {
            nextSunday = new Date();
            nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7));
            nextSunday.setHours(23, 59, 0, 0);
            delay = nextSunday.getTime() - now.getTime();
        }

        setTimeout(() => {
            let finalEndDate: Date; 

            if (this.endDate) {
                finalEndDate = this.endDate;
            }else{
                let endDate7DaysAfter: Date = this.startDate ? new Date(this.startDate) : new Date(nextSunday);
                endDate7DaysAfter.setDate(nextSunday.getDate() + 7);
                finalEndDate = endDate7DaysAfter;
            }

            TournamentManagerService.tournamentManager.iniciar(finalEndDate);
        }, delay);

        TournamentManagerService.settedUp = true;
    }

    public getInstance(): TournamentManager {
        if (!TournamentManagerService.settedUp) {
            this.setUp();
        }
        return TournamentManagerService.tournamentManager;
    }

    public setStartDate(date: Date): void {
        this.startDate = date;
    }

    public setEndDate(date: Date): void {
        this.endDate = date;
    }

}
