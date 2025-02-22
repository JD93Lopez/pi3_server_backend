import {FlashcardRepositoryPort} from "../../../domain/ports/driven/FlashcardRepositoryPort"
import FlashcardRepository from "../../Repository/backend_api/FlashcardRepository"

export default class FlashcardRepositoryFactory {
  public static readonly create = (): FlashcardRepositoryPort => {
    return new FlashcardRepository()
  }
}