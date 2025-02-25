import { CreateFlashcardsUseCasePort } from "../../../domain/ports/driver/usecase/CreateFlashcardsUseCasePort";
import TopicHelper from "../../helper/TopicHelper";

export class CreateFlashcardsUseCase implements CreateFlashcardsUseCasePort {

    

    async createFlashcards(topicClient: any): Promise<number[]> {
        const topicHelper = new TopicHelper();
        const topicDomain = topicHelper.endpointToDomainTopic(topicClient);

        const id_topic = topicDomain.getIdTopic();
        const flashcards = topicDomain.getFlashcards();

        return []
    }

}