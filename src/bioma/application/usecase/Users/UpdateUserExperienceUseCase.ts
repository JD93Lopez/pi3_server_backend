import UpdateUserExperienceServicePort from "../../../domain/ports/driver/service/Users/UpdateUserExperienceServicePort";
import UpdateUserExperienceUseCasePort from "../../../domain/ports/driver/usecase/Users/UpdateUserExperienceUseCasePort";

export default class UpdateUserExperienceUseCase implements UpdateUserExperienceUseCasePort {

    constructor(private readonly updateUserExperienceService: UpdateUserExperienceServicePort) {}
    
    async updateUserXP(userId: number, experience: number): Promise<number> {
        // TODO añadir experiencia a torneo
        return await this.updateUserExperienceService.updateUserXP(userId, experience);
    }
}