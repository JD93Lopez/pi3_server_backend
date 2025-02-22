import { AbstractTopic } from "./AbstractTopic";


export class Flashcard extends AbstractTopic {

    constructor(id_topic: number, name: string, descriptiopn: string) {
        super(id_topic, name, descriptiopn);
    }
    
    isNull(): boolean {
        return false;
    }
    
}
