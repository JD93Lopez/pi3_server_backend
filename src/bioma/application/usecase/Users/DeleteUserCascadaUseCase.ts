import { DeleteUserCascadaServicePort } from "../../../domain/ports/driver/service/Users/DeleteUserCascadaServicePort";
import DeleteUserCascadaUseCasePort from "../../../domain/ports/driver/usecase/Users/DeleteUserCascadaUseCasePort";


export default class DeleteUserCascadaUseCase implements DeleteUserCascadaUseCasePort {
    
    constructor(private deleteUserCascadaService: DeleteUserCascadaServicePort) {}

    async deleteUserById(id: number): Promise<number> {
        const res = await this.deleteUserCascadaService.deleteUserById(id);
        return res
        
    }
    
}