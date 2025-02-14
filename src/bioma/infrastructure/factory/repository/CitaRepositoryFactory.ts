import CitaRepositoryPort from "../../../domain/port/driven/CitaRepositoryPort"
import CitaRepository from "../../Repository/backend_api/CitaRepository"

export default class CitaRepositoryFactory {
  public static readonly create = (): CitaRepositoryPort => {
    return new CitaRepository()
  }
}