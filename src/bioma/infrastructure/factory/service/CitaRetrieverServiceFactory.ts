import CitaRetrieverService from '../../../application/service/CitaRetrieverService'
import CitaRetrieverServicePort from '../../../domain/port/driver/service/CitaRetrieverServicePort'
import CitaRepositoryFactory from '../repository/CitaRepositoryFactory'

export default class CitaRetrieverServiceFactory {
  public static readonly create = (): CitaRetrieverServicePort  => {
    const swApiRepository = CitaRepositoryFactory.create()
    // const movieImageService = new MovieImageService()
    return new CitaRetrieverService(swApiRepository)
  }
}
