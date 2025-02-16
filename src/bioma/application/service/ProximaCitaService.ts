import { CitaTypes, EstadoCitaTypes, EstadoTicketTypes } from '../../domain/model/icon/AbstractIcon'
import Cita from '../../domain/model/icon/Icon'
import NullCita from '../../domain/model/icon/Nullicon'
import CitaRepositoryPort from '../../domain/port/driven/CitaRepositoryPort'
import ClienteCompletoServicePort from '../../domain/port/driver/service/ClienteCompletoServicePort'
import ProximaCitaServicePort from '../../domain/port/driver/service/ProximaCitaServicePort'

export default class ProximaCitaService
  implements ProximaCitaServicePort
{
  constructor(
    private readonly citaRepository: CitaRepositoryPort,
    private readonly clienteCompletoService: ClienteCompletoServicePort
  ) {}

  public next = async (id: number): Promise<Cita> => {
    const proximaCita = await this.citaRepository.getProximaCitaCliente(id)
    if (!proximaCita) {
      return Promise.resolve(new NullCita())
    }
    return Promise.resolve(new Cita({
      id: proximaCita.id,
      tipo: proximaCita.tipo as CitaTypes,
      descripcion: proximaCita.descripcion,
      fecha: new Date(proximaCita.fecha),
      hora: proximaCita.hora,
      lugar: proximaCita.lugar,
      estado_cita: proximaCita.estado_cita as EstadoCitaTypes,
      estado_ticket: proximaCita.estado_ticket as EstadoTicketTypes,
      anotaciones: proximaCita.anotaciones,
      cliente: await this.clienteCompletoService.get(id)
    }))
  }  

}
