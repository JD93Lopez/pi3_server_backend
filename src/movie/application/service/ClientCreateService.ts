import ClientRepositoryPort from '../../domain/port/driven/ClientRepositoryPort'
import ClientCreateServicePort from '../../domain/port/driver/service/ClientCreateServicePort'
import ClientDataInterface from '../../domain/types/ClientDataInterface'

export default class ClientCreateService
  implements ClientCreateServicePort
{
  constructor(
    private readonly ClientRepository: ClientRepositoryPort
  ) {}

  public create = async (client: ClientDataInterface): Promise<number> => {
    const clientId = await this.ClientRepository.saveClient(client)

    return Promise.resolve(clientId)
  }  
}
