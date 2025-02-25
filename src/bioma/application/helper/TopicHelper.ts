import { TopicDoc } from "../../domain/docs/TopicDoc";
import Icon from "../../domain/model/icon/Icon";
import { AbstractTopic } from "../../domain/model/topic/AbstractTopic";
import { Topic } from "../../domain/model/topic/Topic";
import { TopicInterface } from "../../domain/types/TopicInterface";
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

    databaseToDomainTopic(topic: TopicDoc): AbstractTopic {
        return new Topic({
            id_topic: topic.id_topic,
            name: topic.name,
            description: topic.description,
            icon: new Icon(topic.ICONS_id_icon,""),
            flashcards: []
        });
    }

}