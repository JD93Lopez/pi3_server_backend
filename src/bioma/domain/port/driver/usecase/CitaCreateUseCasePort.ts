import CitaDataInterface from "../../../types/CitaDataInterface";

export default interface CitaCreateUseCasePort {
  createCita (client: CitaDataInterface): Promise<number>
}