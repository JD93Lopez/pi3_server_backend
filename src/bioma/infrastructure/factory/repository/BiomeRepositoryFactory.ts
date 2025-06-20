import { BiomeRepositoryPort } from "../../../domain/ports/driven/BiomeRepositoryPort";
import BiomeRepository from "../../Repository/backend_api/BiomeRepository";

export default class BiomeRepositoryFactory { 
    public static readonly create = (): BiomeRepositoryPort => {
        return new BiomeRepository()
    }
    public static readonly update = (): BiomeRepositoryPort => {
        return new BiomeRepository()
    }
    public static readonly delete = (): BiomeRepositoryPort => {
        return new BiomeRepository()
    }
}