import { AbstractPlayedDay } from "../../../domain/model/played_day/AbstractPlayedDay";
import { GetLast31DaysServicePort } from "../../../domain/ports/driver/service/PlayedDays/GetLast31DaysServicePort";
import { GetLast31DaysUseCasePort } from "../../../domain/ports/driver/usecase/PlayedDays/GetLast31DaysUseCasePort";

export class GetLast31DaysUseCase implements GetLast31DaysUseCasePort {

  constructor(private playedDayCreateService: GetLast31DaysServicePort ) {}
  async getLast31Days(id_user: number): Promise<AbstractPlayedDay[]> {
    const result = await this.playedDayCreateService.getLast31Days(id_user);
    return result;
  }
}