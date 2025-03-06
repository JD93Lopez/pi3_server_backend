import CreatePlayedDayUseCase from "../../../../bioma/application/usecase/PlayedDays/CreatePlayedDayUseCase";
import PlayedDayControllerExpress from "../../../../bioma/infrastructure/express/controller/PlayedDayControllerExpress";
import PlayedDayRouterExpress from "../../../../bioma/infrastructure/express/router/PlayedDayRouterExpress";
import PlayedDayCreateServiceFactory from "../../../../bioma/infrastructure/factory/service/PlayedDayCreateServiceFactory";
import RouterExpress from "../../../domain/RouterExpress";

export default class PlayedDayRouterFactory {

    public static readonly create = (): RouterExpress => {
        
        // ------------- CREATE PLAYED DAY  ----------------
        const playedDayCreateService = PlayedDayCreateServiceFactory.create()
        const createPlayedDayUseCase = new CreatePlayedDayUseCase(playedDayCreateService)

        // ---------- PLAYED DAY CONTROLLER ---------------
        const playedDayController = new PlayedDayControllerExpress(createPlayedDayUseCase)
        const playedDayRouter = new PlayedDayRouterExpress(playedDayController)
        
        return playedDayRouter

    }
}