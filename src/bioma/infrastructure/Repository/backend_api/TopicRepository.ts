import { TopicDoc } from "../../../domain/docs/TopicDoc"
import { TopicRepositoryPort } from "../../../domain/ports/driven/TopicRepositoryPort"
import TopicDBC from "./dbc/TopicDBC"

export default class TopicRepository implements TopicRepositoryPort {
  private readonly createTopicDBC: TopicDBC

  constructor() {
    this.createTopicDBC = new TopicDBC()
  }

  async save (topic: TopicDoc): Promise<number> {
    const idTopicFromDB = await this.createTopicDBC.createTopic(topic.name, topic.description, topic.ICONS_id_icon, topic.BIOMES_id_biome)
    return idTopicFromDB
  }

  async getByBiomeId(biome_id: number): Promise<TopicDoc[]> {
    const topicsFromDB = await this.createTopicDBC.getTopicsByBiome(biome_id)
    return topicsFromDB
  }
  async deleteTopicById(id: number): Promise<number> {
    const deleted = await this.createTopicDBC.deleteTopicById(id)
    return deleted
  }

  async updateTopic(topic: TopicDoc): Promise<number> {
    const updated = await this.createTopicDBC.updateTopic(topic.id_topic, topic.name, topic.ICONS_id_icon)
    return updated
  }
}