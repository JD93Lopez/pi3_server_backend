import ClientDataInterface from "../../../types/ClientDataInterface";

export default interface ClientCreateServicePort {
  create (client: ClientDataInterface): Promise<number>
}