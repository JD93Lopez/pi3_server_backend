export default interface UpdateUserExperienceUseCasePort {

    updateUserXP(userId: number, experience: number): Promise<number>;
}