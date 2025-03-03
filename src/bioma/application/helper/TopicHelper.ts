import { TopicDoc } from "../../domain/docs/TopicDoc";
import Icon from "../../domain/model/icon/Icon";
import { AbstractTopic } from "../../domain/model/topic/AbstractTopic";
import { Topic } from "../../domain/model/topic/Topic";
import { TopicInterface } from "../../domain/types/TopicInterface";
import IconRepository from "../../infrastructure/Repository/backend_api/IconRepository";
import FlashcardHelper from "./FlashcardHelper";
import IconHelper from "./IconHelper";

export default class TopicHelper {

    endpointToDomainTopic(topic: TopicInterface): AbstractTopic { 
        const iconHelper = new IconHelper()
        const flashcardHelper = new FlashcardHelper()
        return new Topic({
            id_topic: topic.id_topic,
            name: topic.name,
            description: topic.description,
            icon: iconHelper.endpointToDomainIcon(topic.icon),
            flashcards: topic.flashcards.map((flashcard) => {
                return flashcardHelper.endpointToDomainFlashcard(flashcard)
            }),
        });
    }

    async databaseToDomainTopic(topic: TopicDoc): Promise<AbstractTopic> {
        const iconRepo = new IconRepository()

        return new Topic({
            id_topic: topic.id_topic,
            name: topic.name,
            description: topic.description,
            icon: new Icon(topic.ICONS_id_icon, await iconRepo.getIconImageById(topic.ICONS_id_icon)),
            flashcards: []
        });
    }

}