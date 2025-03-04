import ThemeRepositoryPort from "../../../domain/ports/driven/ThemeRepositoryPort";
import themeRepository from "../../Repository/backend_api/ThemeRepository";

export default class ThemeRepositoryFactory {
    public static readonly  create = (): ThemeRepositoryPort => {
        return new themeRepository();
    }
}
