import { IconRepositoryPort } from "../../../domain/ports/driven/IconRepositoryPort"
import IconRepository from "../../Repository/backend_api/IconRepository"

export default class IconRepositoryFactory {
    public static readonly get = (): IconRepositoryPort => {
        return new IconRepository()
    }
}