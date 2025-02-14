export default interface ClientVerifyServicePort {
  verify: (id: string) => Promise<number>
}