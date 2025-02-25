import { TopicRepositoryPort } from "../../../domain/ports/driven/TopicRepositoryPort"
import TopicRepository from "../../Repository/backend_api/TopicRepository"

export default class TopicRepositoryFactory {
  public static readonly create = (): TopicRepositoryPort => {
    return new TopicRepository()
  }
}