import NullCita from '../../domain/model/cita/NullCita'
import Cita from '../../domain/model/cita/Cita'
import CitasClienteUseCasePort from '../../domain/port/driver/usecase/CitasClienteUseCasePort'
import CitasClienteRetrieverServicePort from '../../domain/port/driver/service/CitasClienteRetrieverServicePort'

export default class CitasClienteUsecase implements CitasClienteUseCasePort {
  constructor(
    private readonly citaRetrieverService: CitasClienteRetrieverServicePort
  ) {}

  public getCitas = async (id: number): Promise<Cita[]> => {
    const citasData = await this.citaRetrieverService.retrieve(id)
    
    if (citasData.length > 0) {
      return citasData
    }
    return [new NullCita()]
  }
}
