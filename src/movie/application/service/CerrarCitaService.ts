import CitaRepositoryPort from '../../domain/port/driven/CitaRepositoryPort'
import CerrarCitaServicePort from '../../domain/port/driver/service/CerrarCitaServicePort'

export default class CerrarCitaService
  implements CerrarCitaServicePort
{
  constructor(
    private readonly citaRepository: CitaRepositoryPort
  ) {}

  public cerrar = async (id: number, anotaciones: string): Promise<number> => {
    const citaRes = await this.citaRepository.cerrarCita(id, anotaciones)

    return citaRes
  }  
}
