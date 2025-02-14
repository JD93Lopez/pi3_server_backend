import CitaRepositoryPort from '../../domain/port/driven/CitaRepositoryPort'
import CitaCreateServicePort from '../../domain/port/driver/service/CitaCreateServicePort'
import CitaDataInterface from '../../domain/types/CitaDataInterface'

export default class CitaCreateService
  implements CitaCreateServicePort
{
  constructor(
    private readonly citaRepository: CitaRepositoryPort
  ) {}

  public create = async (cita: CitaDataInterface): Promise<number> => {
    const citaRes = await this.citaRepository.save(cita)

    const idCita = citaRes.id

    return idCita
  }  
}
