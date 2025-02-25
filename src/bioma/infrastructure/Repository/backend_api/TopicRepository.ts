import { TopicDoc } from "../../../domain/docs/TopicDoc"
import { TopicRepositoryPort } from "../../../domain/ports/driven/TopicRepositoryPort"
import TopicDBC from "./dbc/TopicDBC"

export default class FlashcardRepository implements TopicRepositoryPort {
  private readonly createTopicDBC: TopicDBC

  constructor() {
    this.createTopicDBC = new TopicDBC()
  }

  async save (topic: TopicDoc): Promise<number> {
    const topicFromDB = await this.createTopicDBC.createTopic(topic.name, topic.description, topic.ICONS_id_icon, topic.BIOMES_id_biome)
    return topicFromDB
  }
  
}