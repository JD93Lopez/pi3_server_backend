import ClientRepositoryPort from '../../domain/port/driven/ClientRepositoryPort'
import ClientVerifyServicePort from '../../domain/port/driver/service/ClientVerifyServicePort'

export default class ClientVerifyService
  implements ClientVerifyServicePort
{
  constructor(
    private readonly ClientRepository: ClientRepositoryPort
  ) {}

  public verify = async (id: string): Promise<number> => {
    const code = await this.ClientRepository.verify(id)

    return Promise.resolve(code)
  }  
}
