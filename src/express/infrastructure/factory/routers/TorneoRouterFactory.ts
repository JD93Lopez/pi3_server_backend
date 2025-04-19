import GetUserRankServiceFactory from "../../../../bioma/infrastructure/factory/service/Users/GetUserRankServiceFactory";
import GetParticipantesSalaUseCase from "../../../../torneo/application/usecase/GetParticipantesSalaUseCase";
import GetTiempoRestanteUseCase from "../../../../torneo/application/usecase/GetTiempoRestanteUseCase";
import InscribirTorneoUseCase from "../../../../torneo/application/usecase/InscribirTorneoUseCase";
import TorneoControllerExpress from "../../../../torneo/infraestructure/express/controller/TorneoControllerExpress";
import TorneoRouterExpres from "../../../../torneo/infraestructure/express/router/TorneoRouterExpres";
import RouterExpress from "../../../domain/RouterExpress";

export default class TorneoRouterFactory {

    public static readonly create = (): RouterExpress => {

        // -------- Inscribir torneo --------
        const getRankService = GetUserRankServiceFactory.create()
        const inscribirTorneoUseCase = new InscribirTorneoUseCase(getRankService)

        // -------- Está participando en la sala --------
        const getParticipantesSalaUseCase = new GetParticipantesSalaUseCase()

        // -------- Tiempo restante --------
        const getTiempoRestanteUseCase = new GetTiempoRestanteUseCase()

        const inscribirTorneoController = new TorneoControllerExpress(inscribirTorneoUseCase, getParticipantesSalaUseCase, getTiempoRestanteUseCase)

        const TorneoRouter = new TorneoRouterExpres(inscribirTorneoController)

        return TorneoRouter
    }
}