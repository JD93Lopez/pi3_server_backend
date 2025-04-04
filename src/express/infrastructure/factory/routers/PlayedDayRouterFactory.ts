import CreatePlayedDayUseCase from "../../../../bioma/application/usecase/PlayedDays/CreatePlayedDayUseCase";
import {GetLast31DaysUseCase } from "../../../../bioma/application/usecase/PlayedDays/GetLast31DaysUseCase";
import PlayedDayControllerExpress from "../../../../bioma/infrastructure/express/controller/PlayedDayControllerExpress";
import PlayedDayRouterExpress from "../../../../bioma/infrastructure/express/router/PlayedDayRouterExpress";
import GetLast31DaysServiceFactory from "../../../../bioma/infrastructure/factory/service/PlayedDays/GetLast31DaysServiceFactory";
import PlayedDayCreateServiceFactory from "../../../../bioma/infrastructure/factory/service/PlayedDays/PlayedDayCreateServiceFactory";
import RouterExpress from "../../../domain/RouterExpress";

export default class PlayedDayRouterFactory {

    public static readonly create = (): RouterExpress => {
        
        // ------------- CREATE PLAYED DAY  ----------------
        const playedDayCreateService = PlayedDayCreateServiceFactory.create()
        const createPlayedDayUseCase = new CreatePlayedDayUseCase(playedDayCreateService)

        // ------------- GET PLAYED DAYS ----------------
        const getLast31DaysService = GetLast31DaysServiceFactory.create()
        const getLast31DaysUseCase = new GetLast31DaysUseCase(getLast31DaysService)

        // ---------- PLAYED DAY CONTROLLER ---------------
        const playedDayController = new PlayedDayControllerExpress(createPlayedDayUseCase, getLast31DaysUseCase)
        const playedDayRouter = new PlayedDayRouterExpress(playedDayController)
        
        return playedDayRouter

    }
}