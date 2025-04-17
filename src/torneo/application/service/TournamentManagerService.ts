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

    public setUp(){
        if (TournamentManagerService.settedUp) {
            return;
        }
        TournamentManagerService.settedUp = true;

        const now = new Date();
        let delay: number;
        let nextSunday: Date;

        if (this.startDate) {
            delay = this.startDate.getTime() - now.getTime();
            delay = delay < 0 ? 0 : delay; // Asegurarse de que el retraso no sea negativo
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
    }

    public getInstance(): TournamentManager {
        if (!TournamentManagerService.settedUp) {
            this.setUp();
        }
        return TournamentManagerService.tournamentManager;
    }

    public setStartDate(date: Date): void {
        const now = new Date();
        if (date >= now) {
            this.startDate = date;
        } else {
            throw new Error("Start date must be in the future.");
        }
    }

    public setEndDate(date: Date): void {
        const now = new Date();
        if (date <= now) {
            throw new Error("End date must be in the future.");
        }
        if (this.startDate && date <= this.startDate) {
            throw new Error("End date must be after the start date.");
        }
        this.endDate = date;
    }
    public estaInscritoObtenerTiempoRestante(userId: number): string {
        const tiempoRestante = TournamentManagerService.tournamentManager.estaInscritoObtenerTiempoRestante(userId);
    
        if (tiempoRestante === -1) {
            return "El usuario no está inscrito.";
        }
    
        if (tiempoRestante === -2) {
            return "El torneo ya ha finalizado.";
        }
    
        const segundos = Math.floor(tiempoRestante / 1000) % 60;
        const minutos = Math.floor(tiempoRestante / (1000 * 60)) % 60;
        const horas = Math.floor(tiempoRestante / (1000 * 60 * 60)) % 24;
        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    
        return `${dias}d ${horas}h ${minutos}m ${segundos}s restantes`;
    }
    
}
