import ClientRepositoryPort from "../../../domain/port/driven/ClientRepositoryPort"
import ClientRepository from "../../Repository/backend_api/ClientRepository"

export default class ClientRepositoryFactory {
  public static readonly create = (): ClientRepositoryPort => {
    return new ClientRepository()
  }
}