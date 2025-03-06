import RouterExpress from "../../../../express/domain/RouterExpress";
import PlayedDayControllerExpressPort from "../../../domain/ports/driver/controller/PlayedDayControllerExpressPort";
import PlayedDayRouterExpressPort from "../../../domain/ports/driver/router/PlayedDayRouterExpressPort";

export default class PlayedDayRouterExpress extends RouterExpress implements PlayedDayRouterExpressPort {

    constructor(private readonly playedDayController: PlayedDayControllerExpressPort){
        super();
        this.routes();  
    }

    public routes = (): void => {
        this.getPlayedDayRoutes();
    }

    public getPlayedDayRoutes = (): void => {
        this.router.post(
            "/v1.0/played/creation",
            this.playedDayController.createPlayedDay.bind(this.playedDayController)
        )
    }

}