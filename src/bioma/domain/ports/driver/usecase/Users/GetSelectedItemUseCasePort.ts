export default interface GetSelectedItemUseCasePort {
    getSelectedItem(user_id: number): Promise<number>;
}