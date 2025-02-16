import { abstractTopic } from "./AbstractTopic";

export class Flashcard extends abstractTopic {

    constructor(id_topic: string, name: string, descriptiopn: string) {
        super(id_topic, name, descriptiopn);
    }
    
    isNull(): boolean {
        return false;
    }
    
}
