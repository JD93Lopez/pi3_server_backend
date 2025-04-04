import { UserInterface } from "../../../../../bioma/domain/types/UserInterface";

export default interface InscribirTorneoUseCasePort {
    inscribirTorneo(user: UserInterface): Promise<any>;
}

