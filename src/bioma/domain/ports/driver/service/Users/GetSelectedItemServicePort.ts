export default interface GetSelectedItemServicePort {
    getSelectedItem(user_id: number): Promise<number>;
}