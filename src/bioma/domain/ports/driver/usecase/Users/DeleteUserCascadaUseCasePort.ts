export default interface DeleteUserCascadaUseCasePort {
    deleteUserById(id: number): Promise<number>
}