import { IconDoc } from "../../docs/IconDoc";

export interface IconRepositoryPort {
    getAllIcons(): Promise<IconDoc[]>
}