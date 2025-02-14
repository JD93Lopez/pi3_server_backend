import RepositoryInterface from "../../repository/RepositoryInterface"
import CitaDataInterface from "../../types/CitaDataInterface"

export default interface CitaRepositoryPort extends RepositoryInterface<string, CitaDataInterface> {
    getCitasCliente(id: number): Promise<CitaDataInterface[]>
    getProximaCitaCliente(id: number): Promise<CitaDataInterface>
    cerrarCita(id: number, anotaciones: string): Promise<number>
}