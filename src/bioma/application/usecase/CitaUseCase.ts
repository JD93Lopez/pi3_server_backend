import CitaRetrieverServicePort from '../../domain/port/driver/service/CitaRetrieverServicePort'
import CitaUseCasePort from '../../domain/port/driver/usecase/CitaUseCasePort'
import NullCita from '../../domain/model/cita/NullCita'
import Cita from '../../domain/model/cita/Cita'

export default class CitaUsecase implements CitaUseCasePort {
  constructor(
    private readonly citaRetrieverService: CitaRetrieverServicePort
  ) {}

  public getCitas = async (): Promise<Cita[]> => {
    const citasData = await this.citaRetrieverService.retrieve()
    if (citasData.length > 0) {
      return citasData
    }
    return [new NullCita()]
  }
}
