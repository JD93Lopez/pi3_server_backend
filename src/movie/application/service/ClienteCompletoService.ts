import Cliente, { PrioridadTypes } from '../../domain/model/cliente/Cliente'
import { UsuarioTypes } from '../../domain/model/usuario/AbstractUsuario'
import ClientRepositoryPort from '../../domain/port/driven/ClientRepositoryPort'
import ClienteCompletoServicePort from '../../domain/port/driver/service/ClienteCompletoServicePort'

export default class ClienteCompletoService
  implements ClienteCompletoServicePort
{
  constructor(
    private readonly citaRepository: ClientRepositoryPort
  ) {}

  public get = async (id: number): Promise<Cliente> => {
    const cliente = await this.citaRepository.completeClient(id)

    return Promise.resolve(new Cliente({
      id: parseInt(cliente.id),
      tipo: cliente.tipo as UsuarioTypes,
      identificacion: cliente.identificacion,
      nombres: cliente.nombres,
      apellidos: cliente.apellidos,
      direccion: cliente.direccion,
      prioridad: cliente.prioridad as PrioridadTypes,
      fecha_natal: new Date(cliente.fecha_natal),
    }))
  }  

}
