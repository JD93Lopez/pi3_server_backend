import { AbstractIcon } from "../../../model/icon/AbstractIcon";

export interface GetIconsServicePort {
    getAllIcons: () => Promise<AbstractIcon[]>;
}