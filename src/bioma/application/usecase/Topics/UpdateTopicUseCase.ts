import TopicUpdateServicePort from "../../../domain/ports/driver/service/Topics/TopicUpdateServicePort";
import UpdateTopicUseCasePort from "../../../domain/ports/driver/usecase/Topics/UpdateTopicUseCasePort";
import { TopicInterface } from "../../../domain/types/TopicInterface";
import TopicHelper from "../../helper/TopicHelper";

export default class UpdateTopicUseCase  implements UpdateTopicUseCasePort {
       
    constructor( private topicUpdateService: TopicUpdateServicePort) {}

    async updateTopic(topic: TopicInterface): Promise<number> {
        
        const topicHelper = new TopicHelper();
        const topicDomain = topicHelper.endpointToDomainTopic(topic);

        const result = await this.topicUpdateService.updateTopic(topicDomain);
        return result;
    }
}
