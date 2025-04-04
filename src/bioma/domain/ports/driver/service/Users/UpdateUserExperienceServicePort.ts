export default interface UpdateUserExperienceServicePort {

    updateUserXP(userId: number, experience: number): Promise<number>;
}

