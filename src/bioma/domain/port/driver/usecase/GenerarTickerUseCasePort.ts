export default interface GenerarTickerUseCasePort {
  generateTicket(id: number): Promise<number>
}