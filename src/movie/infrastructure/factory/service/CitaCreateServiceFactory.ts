import CitaCreateService from '../../../application/service/CitaCreateService'
import CitaCreateServicePort from '../../../domain/port/driver/service/CitaCreateServicePort'
import CitaRepositoryFactory from '../repository/CitaRepositoryFactory'

export default class CitaCreateServiceFactory {
  public static readonly create = (): CitaCreateServicePort  => {
    const swApiRepository = CitaRepositoryFactory.create()
    // const movieImageService = new MovieImageService()
    return new CitaCreateService(swApiRepository)
  }
}
