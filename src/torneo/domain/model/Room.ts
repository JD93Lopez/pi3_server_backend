import { AbstractUser } from "../../../bioma/domain/model/user/AbstractUser";
import { RankName } from "./RankName";

export class Room {
    users: AbstractUser[];

    constructor() {
        this.users = [];
    }

    anadir(users: AbstractUser[]): boolean {
        this.users.push(...users);
        return true;
    }

    organizar(): boolean {
        this.users.sort((a, b) => b.getReceivedXpTotal() - a.getReceivedXpTotal());
        return true;
    }

    getRoomUsers(): AbstractUser[] {
        return this.users;
    }

    searchUser(userId: number): AbstractUser | undefined {
        return this.users.find(user => user.getIdUser() === userId);
    }

    finalizar( _rankName: RankName ): AbstractUser[] {
        switch (_rankName) {
            case RankName.BRONZE:
                // Ascend half Bigger Ascend
                const topHalfIndex = Math.ceil(this.users.length / 2);
                this.users.slice(0, topHalfIndex).forEach(user => user.setRank(RankName.SILVER));
                break;
            case RankName.SILVER:
                // Ascend third Bigger Keep
                this.ascendThirdBiggerKeep(RankName.GOLD, RankName.BRONZE);
                break;
            case RankName.GOLD:
                // Ascend third Bigger Keep
                this.ascendThirdBiggerKeep(RankName.PLATINUM, RankName.SILVER);
                break;
            case RankName.PLATINUM:
                // Ascend third Bigger Descend
                const topThirdIndex = Math.floor(this.users.length / 3);
                const midThirdIndex = Math.floor((this.users.length / 3) * 2);
                this.users.forEach((user, index) => {
                    if (index < topThirdIndex) {
                        user.setRank(RankName.DIAMOND); // Ascender
                    } else if (index < midThirdIndex) {
                        // Mantener
                    } else {
                        user.setRank(RankName.GOLD); // Descender
                    }
                });
                break;
            case RankName.DIAMOND:
                // Ascend half Bigger Descend
                const halfIndex = Math.ceil(this.users.length / 2);
                this.users.forEach((user, index) => {
                    if (index >= halfIndex) {
                        user.setRank(RankName.PLATINUM); // Descender
                    }
                });
                break;
            default:
                console.error("Rango no reconocido.");
                break;
        }
        return this.users; // Devolver lista de usuarios clasificados con nuevo rango, xp y racha de victoria calculada
    }

    private ascendThirdBiggerKeep( upRank: RankName, downRank: RankName ): AbstractUser[] {
        const topThirdIndex = Math.floor(this.users.length / 3);
        const midThirdIndex = Math.floor((this.users.length / 3) * 2);
        this.users.forEach((user, index) => {
            if (index < topThirdIndex) {
                user.setRank(upRank); // Ascender
            } else if (index <= midThirdIndex) {
                // Mantener
            } else {
                user.setRank(downRank); // Descender
            }
        });
        return this.users;
    }
}