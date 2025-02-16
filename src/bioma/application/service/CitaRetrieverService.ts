import { CitaTypes, EstadoCitaTypes, EstadoTicketTypes } from '../../domain/model/icon/AbstractIcon'
import Cita from '../../domain/model/icon/Icon'
import NullCliente from '../../domain/model/cliente/NullCliente'
import CitaRepositoryPort from '../../domain/port/driven/CitaRepositoryPort'
import CitaRetrieverServicePort from '../../domain/port/driver/service/CitaRetrieverServicePort'

export default class CitaRetrieverService
  implements CitaRetrieverServicePort
{
  constructor(
    //private readonly movieImageService: MovieImageServicePort,
    private readonly SWAPIRepository: CitaRepositoryPort
  ) {}

  public retrieve = async (): Promise<Cita[]> => {
    const SWAPImovies = await this.SWAPIRepository.findAll()
    const movies = SWAPImovies.map((movie) => { 
      return new Cita({
        id: movie.id,
        tipo: movie.tipo as CitaTypes,
        descripcion: movie.descripcion,
        fecha: new Date(movie.fecha),
        hora: movie.hora,
        lugar: movie.lugar,
        estado_cita: movie.estado_cita as EstadoCitaTypes,
        estado_ticket: movie.estado_ticket as EstadoTicketTypes,
        anotaciones: movie.anotaciones,
        cliente: new NullCliente()
      })
    })

    return Promise.resolve(movies)
  }  

  //getImage method removed usaba MovieImageServicePort

}
