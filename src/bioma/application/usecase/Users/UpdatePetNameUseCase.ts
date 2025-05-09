import UpdatePetNameServicePort from "../../../domain/ports/driver/service/Users/UpdatePetNameServicePort";
import UpdatePetNameUseCasePort from "../../../domain/ports/driver/usecase/Users/UpdatePetNameUseCasePort";

export default class UpdatePetNameUseCase implements UpdatePetNameUseCasePort {
    constructor(private readonly updatePetNameService: UpdatePetNameServicePort) {}
    
    async updatePetName(userId: number, petName: string): Promise<void> {
        return await this.updatePetNameService.updatePetName(userId, petName);
    }
}