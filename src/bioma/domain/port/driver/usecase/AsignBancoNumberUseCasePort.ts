export default interface AsignBancoNumberUseCasePort {
  getNumber (): Promise<number>
}