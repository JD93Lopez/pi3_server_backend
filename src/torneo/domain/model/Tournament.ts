import { AbstractUser } from "../../../bioma/domain/model/user/AbstractUser";
import { Rank } from "./Rank";

export class Tournament {
    ranks: Rank[];

    constructor() {
        this.ranks = [];
    }

    clasificar(users: AbstractUser[]): boolean {
        console.log("Clasificando usuarios...");
        // TODO Lógica de clasificación aquí
        return true;
    }

    anadirExperiencia(userId: number, xp: number): boolean {
        const user = this.searchUser(userId);
        if (user) {
            console.log(`Añadiendo ${xp} XP al usuario ${user.getUserName()}`); 
            // TODO añadir experiencia
            return true;
        }
        return false; // Usuario no encontrado
    }

    searchUser(userId: number): AbstractUser | undefined {
        // Búsqueda global en todos los rangos
        for (const rank of this.ranks) {
            const user = rank.searchUser(userId);
            if (user) return user;
        }
        return undefined;
    }

    finalizar(): AbstractUser[] {
        const finalUsers: AbstractUser[] = [];
        for (const rank of this.ranks) {
            finalUsers.push(...rank.finalizar());
        }
        return finalUsers; // Devolver lista de usuarios clasificados
    }
}