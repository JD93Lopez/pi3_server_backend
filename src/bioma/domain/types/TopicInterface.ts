import { FlashcardInterface } from "./FlashcardInterface";
import { IconInterface } from "./IconInterface";

export interface TopicInterface {
    id_topic: number;
    name: string;
    description: string;
    icon: IconInterface;
    flashcards: FlashcardInterface[];
}