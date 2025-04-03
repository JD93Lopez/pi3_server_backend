export default interface ThemeRetriverImageByIdServicePort {
    getThemeImageById(id_theme: number): Promise<string>
}
