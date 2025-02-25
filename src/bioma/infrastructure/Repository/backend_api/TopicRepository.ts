import { TopicDto } from "../../../domain/dctos/TopicDto"
import TopicDBC from "./dbc/TopicDBC"

export default class FlashcardRepository {
  private readonly createTopicDBC: TopicDBC

  constructor() {
    this.createTopicDBC = new TopicDBC()
  }

  async save (topic: TopicDto, biome_id: number): Promise<number> {
    const topicFromDB = await this.createTopicDBC.createTopic(topic.name, topic.description, topic.icon_id, biome_id)
    return topicFromDB
  }
  
}