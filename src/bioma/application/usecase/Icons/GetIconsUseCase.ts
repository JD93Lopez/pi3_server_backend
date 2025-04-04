import { AbstractIcon } from "../../../domain/model/icon/AbstractIcon";
import { GetIconsServicePort } from "../../../domain/ports/driver/service/Icons/GetIconsServicePort";
import { GetIconsUseCasePort } from "../../../domain/ports/driver/usecase/Icons/GetIconsUseCasePort";

export class GetIconsUseCase implements GetIconsUseCasePort {

  constructor(
    private getIconsService: GetIconsServicePort
  ) {}
  async getAllIcons(): Promise<AbstractIcon[]> {
    const icons = await this.getIconsService.getAllIcons();
    return icons;
  }
}