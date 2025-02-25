import { AbstractFlashcard } from "../flashcard/AbstractFlashcard";
import { AbstractIcon } from "../icon/AbstractIcon";

export abstract class AbstractTopic {
    
    protected id_topic: number;
    protected name: string;
    protected description: string;
    protected icon: AbstractIcon;
    protected flashcards: AbstractFlashcard[];

    constructor(
        topicAttributes: TopicAttributes
    ) {
        this.id_topic = topicAttributes.id_topic;
        this.name = topicAttributes.name;
        this.description = topicAttributes.description;
        this.icon = topicAttributes.icon;
        this.flashcards = topicAttributes.flashcards;
    }

    getIdTopic(): number {
        return this.id_topic;  
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getIcon(): AbstractIcon {
        return this.icon;
    }

    getFlashcards(): AbstractFlashcard[] {
        return this.flashcards;
    }

    abstract isNull(): boolean;
}

export interface TopicAttributes {
    id_topic: number;
    name: string;
    description: string;
    icon: AbstractIcon;
    flashcards: AbstractFlashcard[];
}