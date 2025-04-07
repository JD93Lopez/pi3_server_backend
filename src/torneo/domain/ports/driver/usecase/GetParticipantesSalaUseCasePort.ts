import { AbstractUser } from "../../../../../bioma/domain/model/user/AbstractUser";

export default interface GetParticipantesSalaUseCasePort {
    getParticipantesSala(userId: number, league: string): AbstractUser[];
}
