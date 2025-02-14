import ClienteCompletoService from '../../../application/service/ClienteCompletoService'
import ClienteCompletoServicePort from '../../../domain/port/driver/service/ClienteCompletoServicePort'
import ClientRepositoryFactory from '../repository/ClientRepositoryFactory'

export default class ClienteCompletoServiceFactory {
  public static readonly create = (): ClienteCompletoServicePort  => {
    const swApiRepository = ClientRepositoryFactory.create()
    // const movieImageService = new MovieImageService()
    return new ClienteCompletoService(swApiRepository)
  }
}
