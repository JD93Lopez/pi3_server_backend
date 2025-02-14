import ClientCreateServicePort from '../../domain/port/driver/service/ClientCreateServicePort'
import ClientCreateUseCasePort from '../../domain/port/driver/usecase/ClientCreateUseCasePort'
import ClientDataInterface from '../../domain/types/ClientDataInterface'

export default class ClientCreateUseCase implements ClientCreateUseCasePort {
  constructor(
    private readonly clientVerifyRetrieverService: ClientCreateServicePort
  ) {}

  public createClient = async (client: ClientDataInterface): Promise<number> => {
    const clientVerifyCode: number = await this.clientVerifyRetrieverService.create(client)
    return clientVerifyCode
  }
}
