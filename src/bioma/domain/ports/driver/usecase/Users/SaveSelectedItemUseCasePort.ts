export default interface SaveSelectedItemUseCasePort {
    saveSelectedItem(user_id: number, id_item: number): Promise<number>;
}
