import CitaRepositoryPort from "../../../domain/port/driven/CitaRepositoryPort"
import CitaDataInterface from "../../../domain/types/CitaDataInterface"
import CitaDBC from "./dbc/CitaDBC"

export default class CitaRepository implements CitaRepositoryPort {
  private readonly citaDBC: CitaDBC

  constructor() {
    this.citaDBC = new CitaDBC()
  }
  findAll = async (): Promise<CitaDataInterface[]> => {
    const citasFromDB = await this.citaDBC.findALL()
    return citasFromDB.map((cita: any) => ({
      id: cita.id,
      tipo: cita.tipo,
      descripcion: cita.descripcion,
      fecha: cita.fecha,
      hora: cita.hora,
      lugar: cita.lugar,
      estado_cita: cita.estado_cita,
      estado_ticket: cita.estado_ticket,
      anotaciones: cita.anotaciones
    }))
  }
  
  save = (item: CitaDataInterface): Promise<CitaDataInterface> => {
    const cita = this.citaDBC.createCita(item)
    return cita
  }

  getCitasCliente(id: number): Promise<CitaDataInterface[]> {
    const citasFromDB = this.citaDBC.obtenerCitasCliente(id)
    return citasFromDB
  }

  getProximaCitaCliente(id: number): Promise<CitaDataInterface> {
    const proximaCita = this.citaDBC.obtenerProximaCita(id)
    return proximaCita
  }

  cerrarCita(id: number, anotaciones: string): Promise<number> {
    const result = this.citaDBC.cerrarCita(id, anotaciones)
    return result
  }

  findById = (_id: string): Promise<CitaDataInterface> => {
    throw new Error("Method not implemented.")
  }
  update = (_id: string, _item: Partial<CitaDataInterface>): Promise<boolean | CitaDataInterface> => {
    throw new Error("Method not implemented.")
  }
  delete = (_id: string): Promise<boolean> => {
    throw new Error("Method not implemented.")
  }
  
}