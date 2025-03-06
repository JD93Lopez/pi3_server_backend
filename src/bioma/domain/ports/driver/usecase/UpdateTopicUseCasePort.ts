import { TopicInterface } from "../../../types/TopicInterface";

export default interface UpdateTopicUseCasePort {
    updateTopic(topic: TopicInterface): Promise<number>;
}