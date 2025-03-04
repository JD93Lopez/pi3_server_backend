import { AbstractIcon } from "../../../model/icon/AbstractIcon";

export interface GetIconsUseCasePort {
    getAllIcons(): Promise<AbstractIcon[]>
}