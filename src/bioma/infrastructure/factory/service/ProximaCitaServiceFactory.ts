import ProximaCitaService from '../../../application/service/ProximaCitaService'
import ProximaCitaServicePort from '../../../domain/port/driver/service/ProximaCitaServicePort'
import CitaRepositoryFactory from '../repository/CitaRepositoryFactory'
import ClienteCompletoServiceFactory from './ClienteCompletoServiceFactory'

export default class ProximaCitaServiceFactory {
  public static readonly create = (): ProximaCitaServicePort  => {
    const swApiRepository = CitaRepositoryFactory.create()
    const clienteCompletoService = ClienteCompletoServiceFactory.create()
    // const movieImageService = new MovieImageService()
    return new ProximaCitaService(swApiRepository, clienteCompletoService)
  }
}
