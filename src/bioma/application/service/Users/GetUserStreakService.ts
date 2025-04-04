import { UserRepositoryPort } from "../../../domain/ports/driven/UserRepositoryPort";
import GetUserStreakServicePort from "../../../domain/ports/driver/service/Users/GetUserStreakServicePort";

export default class GetUserStreakService implements GetUserStreakServicePort {
    
    constructor(private userRepo: UserRepositoryPort){}

    async getUserStreak(userId: number): Promise<number> {

        //Aquí se hace primero el calculo de la racha, luego se actualiza en la base de datos y se llama a la tabal de user para obtener su racha actualizada
        await this.userRepo.UpdateUserStreak(userId);
        const res = await this.userRepo.getUserStreak(userId);

        //Se parceaa la racha actualizada a number
        const parsedRes = parseInt(res.toString())
        return parsedRes

    }

    
}