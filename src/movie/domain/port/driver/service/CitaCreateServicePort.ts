import CitaDataInterface from "../../../types/CitaDataInterface";

export default interface CitaCreateServicePort {
  create: (cita: CitaDataInterface) => Promise<number>
}