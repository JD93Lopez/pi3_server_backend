import { AbstractUser } from "../../../bioma/domain/model/user/AbstractUser";
import { NullUser } from "../../../bioma/domain/model/user/NullUser";
import { Rank } from "./Rank";
import { Room } from "./Room";

export class Tournament {
    private ranks: Rank[];

    constructor() {
        this.ranks = [];
    }

    clasificar(users: AbstractUser[]): boolean {
        try {
            const usersByLeague: { [key: string]: AbstractUser[] } = {};

            for (const user of users) {
                const league = Rank.toRankName(user.getLeague());
                if (league) {
                    // Agrupar usuarios por liga
                    if (!usersByLeague[league]) {
                        usersByLeague[league] = [];
                    }
                    usersByLeague[league].push(user);
                } else {
                    console.error(`Liga no válida para el usuario ${user.getUserName()}`);
                    return false;
                }
            }

            // Clasificar usuarios por liga
            for (const league in usersByLeague) {
                // buscar o crear el rango correspondiente a la liga
                let rank = this.ranks.find(r => r.getName() === Rank.toRankName(league));
                if (!rank) {
                    rank = new Rank(Rank.toRankName(league));
                    this.ranks.push(rank);
                }

                // Clasificar usuarios de la liga en el rango correspondiente
                const usersInLeague = usersByLeague[Rank.toRankName(league)];
                if (usersInLeague) {
                    rank.clasificar(usersInLeague);
                }
            }
            return true;
        } catch (error) {
            console.error("Error during classification:", error);
            return false;
        }
    }

    anadirExperienciaLeague(userId: number, league: string, xp: number): boolean {
        const room = this.getUserRoomInRank(userId, league);
        if (room.getUsers().length > 0) {

            room.searchUser(userId).addXp(xp);
            room.organizar(); // Reorganizar la sala después de añadir experiencia

            return true;
        }
        return false; // Usuario no encontrado o rango no válido
    }

    anadirExperiencia(userId: number, xp: number): boolean {
        const user = this.searchUser(userId);
        if (!user.isNull()) {
            user.addXp(xp);
            return true;
        }
        return false; // Usuario no encontrado
    }

    searchUser(userId: number): AbstractUser {
        // Búsqueda global en todos los rangos
        for (const rank of this.ranks) {
            const user = rank.searchUser(userId);
            if (!user.isNull()) return user;
        }
        return new NullUser(); // Usuario no encontrado
    }

    searchUserInRank(userId: number, league: string): AbstractUser {
        const rank = this.ranks.find(r => r.getName() === Rank.toRankName(league));
        if (rank) {
            const user = rank.searchUser(userId);
            if (!user.isNull()) return user;
        }
        return new NullUser(); // Usuario no encontrado
    }

    getUserRoomInRank(userId: number, league: string): Room {
        const rank = this.ranks.find(r => r.getName() === Rank.toRankName(league));
        if (rank) {
            return rank.getUserRoom(userId);
        }
        return new Room(); // Usuario no encontrado
    }

    getUserRankRoomUsers(userId: number, league: string): AbstractUser[] {
        const rank = this.ranks.find(r => r.getName() === Rank.toRankName(league));
        if (rank) {
            const users = rank.getUserRoomUsers(userId);
            return users;
        }
        return []; // Usuario no encontrado o rango no válido
    }

    finalizar(): AbstractUser[] {
        const finalUsers: AbstractUser[] = [];
        for (const rank of this.ranks) {
            finalUsers.push(...rank.finalizar());
        }
        // console.log("Usuarios clasificados al finalizar el torneo:", finalUsers);
        
        return finalUsers; // Devolver lista de usuarios clasificados
    }

    getRanks(): Rank[] {
        return this.ranks;
    }
}