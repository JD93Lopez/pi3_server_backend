import RouterExpress from "../../../../express/domain/RouterExpress";
import TorneoControllerExpressPort from "../../../domain/ports/driver/controller/TorneoControllerExpressPort";
import TorneoRouterExpressPort from "../../../domain/ports/driver/router/TorneoRouterExpressPort";

export default class TorneoRouterExpres extends RouterExpress implements TorneoRouterExpressPort{

    constructor(public torneoController: TorneoControllerExpressPort){
        super()
        this.routes()
    }

    public routes = (): void => {
        this.getTorneoRoutes()
    }

    async getTorneoRoutes() {
        this.router.post(
            "/torneo/suscribir",
            this.torneoController.inscribirTorneo.bind(this.torneoController)
        ),
        this.router.post(
            "/torneo/participando",
            this.torneoController.getParticipantesSala.bind(this.torneoController)
        ),
        this.router.post(
            "/torneo/inscrito",
            this.torneoController.getTiempoRestante.bind(this.torneoController)
        )
    }



}