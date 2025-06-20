import { AbstractUser } from "../../../bioma/domain/model/user/AbstractUser";
import UpdateUserLeagueServiceFactory from "../../../bioma/infrastructure/factory/service/Users/UpdateUserLeagueServiceFactory";
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
        if (this.estaInscritoObtenerTiempoRestante(user.getIdUser()) == -1) {
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

    anadirExperienciaLeague(userId: number, league: string, xp: number): boolean {
        return this.tournament.anadirExperienciaLeague(userId, league, xp);
    }

    anadirExperiencia(userId: number, xp: number): boolean {
        return this.tournament.anadirExperiencia(userId, xp);
    }

    finalizar(): boolean {
        if (this.started && this.endDate) {
            this.started = false;

            const newEndDate = new Date(this.endDate.getTime() + 1000*60*60*24*7); // Recalcular la fecha de finalización
            this.endDate = null; // Limpiar la fecha de finalización
            
            // Configurar un nuevo temporizador para reiniciar el torneo automáticamente después de 1 hora
            setTimeout(() => {
                if (newEndDate) {
                    this.iniciar(newEndDate);
                }
            }, 1000 * 60 * 60); // 1 hora en milisegundos



            // Limpiar el temporizador si aún está activo
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }

            
            const usuariosActualizados = this.tournament.finalizar();
            // console.log("Torneo finalizado.");
            this.tournament = new Tournament(); // Reiniciar el torneo


            
            usuariosActualizados.forEach(usuario => {
                const updateRankService = UpdateUserLeagueServiceFactory.create();
                // Actualizar el rango de cada usuario
                updateRankService.updateUserLeague(usuario.getIdUser(), usuario.getLeague());
            });


            // Reinscribir usuarios con mas de 0 xp
            for (const usuario of usuariosActualizados) {
                if (usuario.getReceivedXpTotal() > 0) {
                    this.inscribir(usuario); // Reinscribir usuarios con más de 0 XP
                }
            }

            return true;
        }
        return false; // No se puede finalizar si no ha comenzado o no ha llegado la fecha de finalización
    }

    estaInscritoObtenerTiempoRestante(userId: number): number { // devuelve el tiempo que falta para jugar else codigo de error
        if (this.inscriptionList.some(u => u.getIdUser() === userId)) {
            if (this.endDate) {
                const now = new Date();
                const timeLeft = this.endDate.getTime() - now.getTime();
                return timeLeft > 0 ? timeLeft : -2; // Return time left or -2 if the endDate has passed but user is in the list // El torneo comenzara pronto
            }
            return -2; // If endDate is not set but user is in the list, return -2 // El torneo comenzara pronto
        }
        return -1; // User is not in the inscription list // No inscrito
    }

    estaParticipandoObtenerSala(userId: number, league: string): AbstractUser[] {
        const users = this.tournament.getUserRankRoomUsers(userId, league);
        return users;
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

    getTournament(): Tournament {
        return this.tournament;
    }

    getInscriptionList(): AbstractUser[] {
        return this.inscriptionList;
    }

    getParticipatingUsers(): AbstractUser[] {
        const participatingUsers: AbstractUser[] = [];
        const ranks = this.tournament.getRanks();
        ranks.forEach(rank => {
            rank.getRooms().forEach(room => {
            participatingUsers.push(...room.getUsers());
            });
        });
        return participatingUsers;
    }
}