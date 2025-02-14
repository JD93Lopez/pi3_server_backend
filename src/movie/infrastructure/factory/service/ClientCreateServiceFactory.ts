import ClientCreateService from '../../../application/service/ClientCreateService'
import ClientCreateServicePort from '../../../domain/port/driver/service/ClientCreateServicePort'
import ClientRepositoryFactory from '../repository/ClientRepositoryFactory'

export default class ClientCreateServiceFactory {
  public static readonly create = (): ClientCreateServicePort  => {
    const repository = ClientRepositoryFactory.create()
    return new ClientCreateService(repository)
  }
}
