import { TopicDeleteServicePort } from "../../../domain/ports/driver/service/Topics/TopicDeleteServicePort";
import DeleteTopicByIdUseCasePort from "../../../domain/ports/driver/usecase/Topics/DeleteTopicByIdUseCasePort";

export default class DeleteTopicUseCase implements DeleteTopicByIdUseCasePort {
    
    constructor(private deleteTopicService: TopicDeleteServicePort) {}

    async deleteTopicById(id: number): Promise<number> {
        return await this.deleteTopicService.deleteTopicById(id);
    }
    
}