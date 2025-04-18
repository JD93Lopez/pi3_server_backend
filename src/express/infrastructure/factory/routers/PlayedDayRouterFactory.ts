import CreatePlayedDayUseCase from "../../../../bioma/application/usecase/PlayedDays/CreatePlayedDayUseCase";
import {GetLast31DaysUseCase } from "../../../../bioma/application/usecase/PlayedDays/GetLast31DaysUseCase";
import GetPlayedDaysByDateUseCase from "../../../../bioma/application/usecase/PlayedDays/GetPlayedDaysByDateUseCase";
import PlayedDayControllerExpress from "../../../../bioma/infrastructure/express/controller/PlayedDayControllerExpress";
import PlayedDayRouterExpress from "../../../../bioma/infrastructure/express/router/PlayedDayRouterExpress";
import GetLast31DaysServiceFactory from "../../../../bioma/infrastructure/factory/service/PlayedDays/GetLast31DaysServiceFactory";
import GetPlayedDaysByDateServiceFactory from "../../../../bioma/infrastructure/factory/service/PlayedDays/GetPlayedDayesByDateServiceFactory";
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

        // ------------- GET PLAYED DAYS BY DATE ----------------
        const getPlayedDayByDateService = GetPlayedDaysByDateServiceFactory.create()
        const getPlayedDaysByDateUseCase = new GetPlayedDaysByDateUseCase(getPlayedDayByDateService)

        // ---------- PLAYED DAY CONTROLLER ---------------
        const playedDayController = new PlayedDayControllerExpress(createPlayedDayUseCase, getLast31DaysUseCase, getPlayedDaysByDateUseCase)
        const playedDayRouter = new PlayedDayRouterExpress(playedDayController)
        
        return playedDayRouter

    }
}