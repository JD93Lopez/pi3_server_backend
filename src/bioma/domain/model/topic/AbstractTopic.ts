export abstract class abstractTopic {

    protected id_topic: number;
    protected name: string;
    protected description: string;

    constructor(id_topic: number, name: string, description: string) {
        this.id_topic = id_topic;
        this.name = name;
        this.description = description;
    }

    abstract isNull(): boolean;

}
