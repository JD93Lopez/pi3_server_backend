
export default interface ThemeRepositoryPort {
    getThemeImageById(id_theme: number): Promise<string>;
}