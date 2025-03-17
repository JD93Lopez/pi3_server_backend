import UpdateUserExperienceServicePort from "../../../domain/ports/driver/service/UpdateUserExperienceServicePort";
import UpdateUserExperienceUseCasePort from "../../../domain/ports/driver/usecase/UpdateUserExperienceUseCasePort";

export default class UpdateUserExperienceUseCase implements UpdateUserExperienceUseCasePort {

    constructor(private readonly updateUserExperienceService: UpdateUserExperienceServicePort) {}
    
    async updateUserXP(userId: number, experience: number): Promise<number> {
        return await this.updateUserExperienceService.updateUserXP(userId, experience);
    }
}