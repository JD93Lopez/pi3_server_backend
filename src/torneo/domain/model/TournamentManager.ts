import { AbstractUser } from "../../../bioma/domain/model/user/AbstractUser";
import { Tournament } from "./Tournament";

export class TournamentManager {
    private tournament: Tournament;
    private started: boolean;
    private inscriptionList: AbstractUser[];
    private endDate: Date | null;
    private timer: NodeJS.Timeout | null; // ID del temporizador

    constructor(tournament: Tournament) {
        this.tournament = tournament;
        this.started = false;
        this.inscriptionList = [];
        this.endDate = null;
        this.timer = null; // Inicializamos el temporizador como nulo
    }

    inscribir(user: AbstractUser): boolean {
        if (!this.started) {
            this.inscriptionList.push(user);
            return true;
        }
        return false; // No se permite inscribir si el torneo ya comenzó
    }

    iniciar(endDate: Date): boolean {
        if (!this.started) {
            const now = new Date();
            if (endDate <= now) {
                console.error("La fecha de finalización debe ser posterior a la fecha actual.");
                return false;
            }

            this.endDate = endDate;
            this.started = true;

            // Clasificar usuarios al iniciar el torneo
            this.tournament.clasificar(this.inscriptionList);

            // Configurar el temporizador para finalizar el torneo automáticamente
            const timeUntilEnd = endDate.getTime() - now.getTime(); // Diferencia en milisegundos
            this.timer = setTimeout(() => {
                this.finalizar();
            }, timeUntilEnd);

            console.log(`Torneo iniciado. Finalizará automáticamente en ${timeUntilEnd / 1000} segundos.`);
            return true;
        }
        return false; // No se puede iniciar si ya está en curso
    }

    anadirExperiencia(userId: number, xp: number): boolean {
        return this.tournament.anadirExperiencia(userId, xp);
    }

    finalizar(): boolean {
        if (this.started && this.endDate && new Date() >= this.endDate) {
            this.started = false;

            // Limpiar el temporizador si aún está activo
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }

            console.log("Torneo finalizado.");
            // TODO: Lógica de finalización (por ejemplo, clasificación final)
            const usuariosActualizados = this.tournament.finalizar();
            usuariosActualizados;
            return true;
        }
        return false; // No se puede finalizar si no ha comenzado o no ha llegado la fecha de finalización
    }

    cancelarTorneo(): void {
        if (this.started) {
            this.started = false;

            // Limpiar el temporizador si aún está activo
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }

            console.log("Torneo cancelado.");
        } else {
            console.error("El torneo no ha comenzado, no se puede cancelar.");
        }
    }
}