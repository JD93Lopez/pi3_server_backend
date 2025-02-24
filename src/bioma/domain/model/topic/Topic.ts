import { AbstractTopic, TopicAttributes } from "./AbstractTopic";


export class Topic extends AbstractTopic {

    constructor(topicAttributes: TopicAttributes) {
        super(topicAttributes);
    }
    
    isNull(): boolean {
        return false;
    }
    
}
