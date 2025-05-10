export default interface SaveSelectedItemServicePort {
    saveSelectedItem(user_id: number, id_item: number): Promise<number>;
}