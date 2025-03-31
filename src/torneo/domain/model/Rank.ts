import { AbstractUser } from "../../../bioma/domain/model/user/AbstractUser";
import { RankName } from "./RankName";
import { Room } from "./Room";

export class Rank {
    rankName: RankName;
    rooms: Room[];

    constructor(rankName: RankName) {
        this.rankName = rankName;
        this.rooms = [];
    }

    clasificar(_users: AbstractUser[]): boolean {
        console.log(`Clasificando usuarios en el rango ${this.rankName}`);
        // TODO Lógica de clasificación específica del rango
        return true;
    }

    getRankRooms(): Room[] {
        return this.rooms;
    }

    searchUser(userId: number): AbstractUser | undefined {
        // Búsqueda en todas las salas del rango
        for (const room of this.rooms) {
            const user = room.searchUser(userId);
            if (user) return user;
        }
        return undefined;
    }

    finalizar(): AbstractUser[] {
        const finalUsers: AbstractUser[] = [];
        for (const room of this.rooms) {
            finalUsers.push(...room.finalizar( this.rankName ));
        }
        return finalUsers; // Devolver lista de usuarios clasificados
    }
}