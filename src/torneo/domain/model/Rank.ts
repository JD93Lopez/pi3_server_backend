import { AbstractUser } from "../../../bioma/domain/model/user/AbstractUser";
import { NullUser } from "../../../bioma/domain/model/user/NullUser";
import { RankName } from "./RankName";
import { Room } from "./Room";

export class Rank {
    private rankName: RankName;
    private rooms: Room[];

    constructor(rankName: RankName) {
        this.rankName = rankName;
        this.rooms = [];
    }

    clasificar(users: AbstractUser[]): boolean {
        try {
            // Organizar usuarios por XP y racha
            // calculos de media de xp y racha
            const xpAverage = users.reduce((sum, user) => sum + user.getReceivedXpTotal(), 0) / users.length;
            const streakAverage = users.reduce((sum, user) => sum + parseInt(user.getStreak()), 0) / users.length;

            // Calcular el porcentaje de cada usuario sobre o bajo la media
            const userPercentages = users.map(user => {
                const xpPercentageOverMean = ((user.getReceivedXpTotal() - xpAverage) / xpAverage) * 100;
                const streakPercentageOverMean = ((parseInt(user.getStreak()) - streakAverage) / streakAverage) * 100;
                return {
                    user,
                    xpPercentageOverMean,
                    streakPercentageOverMean
                };
            });

            // Ordenar usuarios por el porcentaje combinado de XP y racha
            const usersOrdered = userPercentages.sort((a, b) => 
                (b.xpPercentageOverMean + b.streakPercentageOverMean) - (a.xpPercentageOverMean + a.streakPercentageOverMean)
            ).map(item => item.user);

            // Definir parametros de clasificacion
            const minUsersPerRoom = 3;
            const maxUsersPerRoom = 15;
            const optimalUsersPerRoom = 10;
            const minRooms = 3;

            // Clasificar usuarios en salas
            let remainingUsers = [...usersOrdered];
            this.rooms = [];

            while (remainingUsers.length > 0) {
                // Calcular el numero de salas restantes necesarias
                const remainingRoomsNeeded = Math.max(minRooms - this.rooms.length, 1);
                // Calcular el numero de usuarios por sala
                const maxUsersForCurrentRoom = Math.min(
                    Math.max(optimalUsersPerRoom, Math.ceil(remainingUsers.length / remainingRoomsNeeded)),
                    maxUsersPerRoom
                );

                // Crear una nueva sala y anadir usuarios
                const usersForRoom = remainingUsers.splice(0, maxUsersForCurrentRoom);
                if (usersForRoom.length < minUsersPerRoom && this.rooms.length >= minRooms) {
                    // Anade los sobrantes a la ultima sala
                    this.rooms[this.rooms.length - 1]!.anadir(usersForRoom);
                } else {
                    const newRoom = new Room();
                    newRoom.anadir(usersForRoom);
                    this.rooms.push(newRoom);
                }
            }

            return true;
        } catch (error) {
            console.error("Error during classification:", error);
            return false;
        }
    }

    getRankRooms(): Room[] {
        return this.rooms;
    }

    searchUser(userId: number): AbstractUser {
        // Búsqueda en todas las salas del rango
        for (const room of this.rooms) {
            const user = room.searchUser(userId);
            if (!user.isNull()) return user;
        }
        return new NullUser(); // Usuario no encontrado
    }

    finalizar(): AbstractUser[] {
        const finalUsers: AbstractUser[] = [];
        for (const room of this.rooms) {
            finalUsers.push(...room.finalizar( this.rankName ));
        }
        return finalUsers; // Devolver lista de usuarios clasificados
    }

    getName(): RankName {
        return this.rankName;
    }

    static toRankName(rankName: string): RankName {
        try {
            return RankName[rankName as keyof typeof RankName];
        } catch (error) {
            console.error(`Error converting string to RankName: ${rankName}`, error);
            throw new Error(`Invalid rank name: ${rankName}`);
        }
    }
}