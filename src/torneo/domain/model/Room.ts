import { AbstractUser } from "../../../bioma/domain/model/user/AbstractUser";

export class Room {
    users: AbstractUser[];

    constructor() {
        this.users = [];
    }

    anadir(users: AbstractUser[]): boolean {
        this.users.push(...users);
        console.log(`${users.length} usuarios añadidos a la sala.`);
        return true;
    }

    organizar(): boolean {
        console.log("Organizando usuarios en la sala...");
        // TODO Lógica de organización aquí
        return true;
    }

    getRoomUsers(): AbstractUser[] {
        return this.users;
    }

    searchUser(userId: number): AbstractUser | undefined {
        return this.users.find(user => user.getIdUser() === userId);
    }

    finalizar(): AbstractUser[] {
        console.log("Finalizando torneo y devolviendo clasificación...");
        // TODO Implementar lógica de final
        return []; // Devolver lista de usuarios clasificados con nuevo rango, xp y racha de victoria calculada
    }
}