import ClientDataInterface from "../../../types/ClientDataInterface";

export default interface ClientCreateUseCasePort {
  createClient (client: ClientDataInterface): Promise<number>
}