export default interface UpdatePetNameServicePort {
    updatePetName(userId: number, petName: string): Promise<void>;
}    