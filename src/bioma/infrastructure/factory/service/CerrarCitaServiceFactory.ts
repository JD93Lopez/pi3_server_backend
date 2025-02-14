import CerrarCitaService from '../../../application/service/CerrarCitaService'
import CerrarCitaServicePort from '../../../domain/port/driver/service/CerrarCitaServicePort'
import CitaRepositoryFactory from '../repository/CitaRepositoryFactory'

export default class CerrarCitaServiceFactory {
  public static readonly create = (): CerrarCitaServicePort  => {
    const swApiRepository = CitaRepositoryFactory.create()
    return new CerrarCitaService(swApiRepository)
  }
}
