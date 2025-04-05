import { AbstractUser } from "../../../bioma/domain/model/user/AbstractUser";
import { Tournament } from "./Tournament";

export class TournamentManager {
    private tournament: Tournament;
    private started: boolean;
    private inscriptionList: AbstractUser[];
    private endDate: Date | null;
    private timer: NodeJS.Timeout | null; // ID del temporizador

    constructor() {
        this.tournament = new Tournament();
        this.started = false;
        this.inscriptionList = [];
        this.endDate = null;
        this.timer = null; // Inicializamos el temporizador como nulo
    }

    inscribir(user: AbstractUser): boolean {
        if (!this.estaInscritoObtenerTiempoRestante(user.getIdUser())) {
            this.inscriptionList.push(user);
            return true;
        }
        return false;
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
            this.inscriptionList = []; // Limpiar la lista de inscripción después de clasificar

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

    anadirExperiencia(userId: number, league: string, xp: number): boolean {
        return this.tournament.anadirExperiencia(userId, league, xp);
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

            const usuariosActualizados = this.tournament.finalizar();
            
            usuariosActualizados.forEach(usuario => {
                usuario
                // TODO Actualizar liga de cada usuario
            });

            // TODO reinscribir usuarios con mas de 0 xp

            return true;
        }
        return false; // No se puede finalizar si no ha comenzado o no ha llegado la fecha de finalización
    }

    estaInscritoObtenerTiempoRestante(userId: number): number { // TODO devuelve el tiempo que falta para jugar else null
        if (this.inscriptionList.some(u => u.getIdUser() === userId)) {
            if (this.endDate) {
            const now = new Date();
            const timeLeft = this.endDate.getTime() - now.getTime();
            return timeLeft > 0 ? timeLeft : -2; // Return time left or -2 if the endDate has passed
            }
            return -2; // If endDate is not set but user is in the list, return -2
        }
        return -1; // User is not in the inscription list
    }

    estaParticipandoObtenerSala(userId: number, league: string): AbstractUser[] {// TODO de una devuelve la sala else null
        const user = this.tournament.searchUserInRank(userId, league);
        if (!user.isNull()) {
            return [user]; //TODO devolver sala de usuario
        }
        return []; // Usuario no encontrado o rango no válido
    }

    estaEnCurso(): boolean {
        return this.started;
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