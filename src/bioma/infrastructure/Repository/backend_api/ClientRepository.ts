import ClientRepositoryPort from "../../../domain/port/driven/ClientRepositoryPort"
import CitaDataInterface from "../../../domain/types/CitaDataInterface"
import ClientDataInterface from "../../../domain/types/ClientDataInterface"
import CompleteClientDataInterface from "../../../domain/types/ClientDataInterface copy"
import ClientDBC from "./dbc/ClientDBC"

export default class ClientRepository implements ClientRepositoryPort {
  private readonly clientDBC: ClientDBC

  constructor() {
    this.clientDBC = new ClientDBC()
  }

  verify = (id: string): Promise<number> => {
    const codeFromDB = this.clientDBC.verifyById(id)
    return codeFromDB
  }

  saveClient = (item: ClientDataInterface): Promise<number> => {
    const clientId = this.clientDBC.save(item)
    return clientId
  }

  completeClient = (id: number): Promise<CompleteClientDataInterface> => {
    const clientCompleted = this.clientDBC.obtenerClienteCompleto(id)
    return clientCompleted
  }

  findAll = async (): Promise<CitaDataInterface[]> => {
    throw new Error("Method not implemented.")
  }
  findById = (_id: string): Promise<CitaDataInterface> => {
    throw new Error("Method not implemented.")
  }
  save = (_item: CitaDataInterface): Promise<CitaDataInterface> => {
    throw new Error("Method not implemented.")
  }
  update = (_id: string, _item: Partial<CitaDataInterface>): Promise<boolean | CitaDataInterface> => {
    throw new Error("Method not implemented.")
  }
  delete = (_id: string): Promise<boolean> => {
    throw new Error("Method not implemented.")
  }
  
}