import { CitaTypes, EstadoCitaTypes, EstadoTicketTypes } from '../../domain/model/cita/AbstractCita'
import Cita from '../../domain/model/cita/Cita'
import NullCliente from '../../domain/model/cliente/NullCliente'
import CitaRepositoryPort from '../../domain/port/driven/CitaRepositoryPort'
import CitasClienteRetrieverServicePort from '../../domain/port/driver/service/CitasClienteRetrieverServicePort'

export default class CitasClienteRetrieverService
  implements CitasClienteRetrieverServicePort
{
  constructor(
    private readonly citaRepository: CitaRepositoryPort
  ) {}

  public retrieve = async (id: number): Promise<Cita[]> => {
    const ClientDBAppointments = await this.citaRepository.getCitasCliente(id)
    
    const citas = ClientDBAppointments.map((cita) => { 
      return new Cita({
        id: cita.id,
        tipo: cita.tipo as CitaTypes,
        descripcion: cita.descripcion,
        fecha: new Date(cita.fecha),
        hora: cita.hora,
        lugar: cita.lugar,
        estado_cita: cita.estado_cita as EstadoCitaTypes,
        estado_ticket: cita.estado_ticket as EstadoTicketTypes,
        anotaciones: cita.anotaciones,
        cliente: new NullCliente()
      })
    })

    return Promise.resolve(citas)
  }  

}
