export default interface ClientVerifyUseCasePort {
  getClientVerify (id: string): Promise<number>
}