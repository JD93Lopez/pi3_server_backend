import { IconRepositoryPort } from "../../../domain/ports/driven/IconRepositoryPort";
import { AbstractIcon } from "../../../domain/model/icon/AbstractIcon";
import IconHelper from "../../helper/IconHelper";
import { GetIconsServicePort } from "../../../domain/ports/driver/service/GetIconsServicePort";

export class GetIconsService implements GetIconsServicePort {

  constructor(private iconRepository: IconRepositoryPort) {}

  async getAllIcons(): Promise<AbstractIcon[]> {
    const iconHelper = new IconHelper();

    const icons = await this.iconRepository.getAllIcons();

    const abstractIcons = icons.map(async (icon) => {
      return await iconHelper.endpointToDomainIcon(icon);
    });

    return await Promise.all(abstractIcons);
  }
}