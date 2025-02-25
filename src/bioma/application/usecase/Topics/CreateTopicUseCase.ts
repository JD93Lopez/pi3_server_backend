import { CreateTopicServicePort } from "../../../domain/ports/driver/service/CreateTopicServicePort";
import { CreateTopicUseCasePort } from "../../../domain/ports/driver/usecase/CreateTopicUseCasePort";
import { TopicInterface } from "../../../domain/types/TopicInterface";
import TopicHelper from "../../helper/TopicHelper";

export class CreateTopicUseCase implements CreateTopicUseCasePort {

    constructor(
        private createTopicService: CreateTopicServicePort
    ){}

    async createTopic( id_biome: number, topicClient: TopicInterface): Promise<number> {
        const topicHelper = new TopicHelper();
        const topicDomain = topicHelper.endpointToDomainTopic(topicClient);

        const id = await this.createTopicService.createTopic(id_biome, topicDomain)

        return id
    }

}