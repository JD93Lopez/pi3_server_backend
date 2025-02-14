import CitasClienteRetrieverService from '../../../application/service/CitasClienteRetrieverService'
import CitasClienteRetrieverServicePort from '../../../domain/port/driver/service/CitasClienteRetrieverServicePort'
import CitaRepositoryFactory from '../repository/CitaRepositoryFactory'

export default class CitasClienteRetrieverServiceFactory {
  public static readonly create = (): CitasClienteRetrieverServicePort  => {
    const swApiRepository = CitaRepositoryFactory.create()
    // const movieImageService = new MovieImageService()
    return new CitasClienteRetrieverService(swApiRepository)
  }
}
