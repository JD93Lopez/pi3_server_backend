import PlayedDayRepositoryPort from "../../../domain/ports/driven/PlayedDayRepositoryPort"
import PlayedDayRepository from "../../Repository/backend_api/PlayedDayRepository"

export default class PlayedDayRepositoryFactory {
  public static readonly create = (): PlayedDayRepositoryPort => {
    return new PlayedDayRepository()
  }

}