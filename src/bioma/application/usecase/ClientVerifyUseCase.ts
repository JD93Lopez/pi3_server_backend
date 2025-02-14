import ClientVerifyUseCasePort from '../../domain/port/driver/usecase/ClientVerifyUseCasePort'
import ClientVerifyServicePort from '../../domain/port/driver/service/ClientVerifyServicePort'

export default class ClientVerifyUseCase implements ClientVerifyUseCasePort {
  constructor(
    private readonly clientVerifyRetrieverService: ClientVerifyServicePort
  ) {}

  public getClientVerify = async (id: string): Promise<number> => {
    const clientVerifyCode: number = await this.clientVerifyRetrieverService.verify(id)
    return clientVerifyCode
  }
}
