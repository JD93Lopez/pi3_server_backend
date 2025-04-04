import { Flashcard } from "../../../domain/model/flashcard/Flashcard";
import { FlashcardCreateServicePort } from "../../../domain/ports/driver/service/Flashcards/FlashcardCreateServicePort";
import { CreateFlashcardsUseCasePort } from "../../../domain/ports/driver/usecase/Flashcards/CreateFlashcardsUseCasePort";
import { TopicInterface } from "../../../domain/types/TopicInterface";
import TopicHelper from "../../helper/TopicHelper";


export class CreateFlashcardsUseCase implements CreateFlashcardsUseCasePort {
   
    constructor(
      private flashcardCreateService: FlashcardCreateServicePort,
    ) {}

    async createFlashcards(topicClient: TopicInterface): Promise<number[]> {
        
        const topicHelper = new TopicHelper();
        const topicDomain = topicHelper.endpointToDomainTopic(topicClient);

        const id_topic = topicDomain.getIdTopic();
        const flashcards = topicDomain.getFlashcards();

        const promise = flashcards.map(async (flashcard: Flashcard) => {
            const result = await this.flashcardCreateService.createFlashcard(id_topic, flashcard); 
            return result;
        });

        const result =  Promise.all(promise);
        
        return result;
    }
}