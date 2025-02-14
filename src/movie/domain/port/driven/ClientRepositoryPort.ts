import RepositoryInterface from "../../repository/RepositoryInterface"
import CitaDataInterface from "../../types/CitaDataInterface"
import ClientDataInterface from "../../types/ClientDataInterface"
import CompleteClientDataInterface from "../../types/ClientDataInterface copy"

export default interface ClientRepositoryPort extends RepositoryInterface<string, CitaDataInterface> {
    verify: (id: string) => Promise<number>
    saveClient: (_item: ClientDataInterface)=> Promise<number>
    completeClient: (id: number)=> Promise<CompleteClientDataInterface>
}