import { AbstractTopic } from "../../../../model/topic/AbstractTopic";

export default interface TopicUpdateServicePort {
  updateTopic(topic: AbstractTopic): Promise<number>;
}