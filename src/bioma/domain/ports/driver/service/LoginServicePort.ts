export default interface LoginServicePort {
  auth(username: string, password: string): Promise<any>;
}
