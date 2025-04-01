import { AbstractUser } from "../../../bioma/domain/model/user/AbstractUser";
import { NullUser } from "../../../bioma/domain/model/user/NullUser";
import { Rank } from "./Rank";

export class Tournament {
    ranks: Rank[];

    constructor() {
        this.ranks = [];
    }

    clasificar(users: AbstractUser[]): boolean {
        try {
            const usersByLeague: { [key: string]: AbstractUser[] } = {};

            for (const user of users) {
                const league = Rank.toRankName(user.getLeague());
                if (league) {
                    if (!usersByLeague[league]) {
                        usersByLeague[league] = [];
                    }
                    usersByLeague[league].push(user);
                } else {
                    console.error(`Liga no válida para el usuario ${user.getUserName()}`);
                    return false;
                }
            }

            for (const league in usersByLeague) {
                let rank = this.ranks.find(r => r.getName() === Rank.toRankName(league));
                if (!rank) {
                    rank = new Rank(Rank.toRankName(league));
                    this.ranks.push(rank);
                }
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

    finalizar(): AbstractUser[] {
        const finalUsers: AbstractUser[] = [];
        for (const rank of this.ranks) {
            finalUsers.push(...rank.finalizar());
        }
        return finalUsers; // Devolver lista de usuarios clasificados
    }
}