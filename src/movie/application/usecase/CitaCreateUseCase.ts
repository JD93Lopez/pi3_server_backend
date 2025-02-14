import CitaCreateServicePort from '../../domain/port/driver/service/CitaCreateServicePort'
import CitaCreateUseCasePort from '../../domain/port/driver/usecase/CitaCreateUseCasePort'
import CitaDataInterface from '../../domain/types/CitaDataInterface'

export default class CitaCreateUseCase implements CitaCreateUseCasePort {
  constructor(
    private readonly citaCreateService: CitaCreateServicePort
  ) {}

  public createCita = async (client: CitaDataInterface): Promise<number> => {
    const clientVerifyCode: number = await this.citaCreateService.create(client)
    return clientVerifyCode
  }
}
