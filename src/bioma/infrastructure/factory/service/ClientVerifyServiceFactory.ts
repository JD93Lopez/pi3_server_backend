import ClientVerifyService from '../../../application/service/ClientVerifyService'
import ClientVerifyServicePort from '../../../domain/port/driver/service/ClientVerifyServicePort'
import ClientRepositoryFactory from '../repository/ClientRepositoryFactory'

export default class ClientVerifyServiceFactory {
  public static readonly create = (): ClientVerifyServicePort  => {
    const swApiRepository = ClientRepositoryFactory.create()
    // const movieImageService = new MovieImageService()
    return new ClientVerifyService(swApiRepository)
  }
}
