import { UserRepositoryPort } from "../../../domain/ports/driven/UserRepositoryPort";
import UserRepository from "../../Repository/backend_api/UserRepository";

export default class UserRepositoryFactory {
    public static create(): UserRepositoryPort {
        return new UserRepository();
    }
}