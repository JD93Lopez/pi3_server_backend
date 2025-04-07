import GetParticipantesSalaUseCase from "../../../../torneo/application/usecase/GetParticipantesSalaUseCase";
import InscribirTorneoUseCase from "../../../../torneo/application/usecase/InscribirTorneoUseCase";
import TorneoControllerExpress from "../../../../torneo/infraestructure/express/controller/TorneoControllerExpress";
import TorneoRouterExpres from "../../../../torneo/infraestructure/express/router/TorneoRouterExpres";
import RouterExpress from "../../../domain/RouterExpress";

export default class TorneoRouterFactory {

    public static readonly create = (): RouterExpress => {

        // -------- Inscribir torneo --------

        const inscribirTorneoUseCase = new InscribirTorneoUseCase()

        // -------- Está participando en la sala --------
        const getParticipantesSalaUseCase = new GetParticipantesSalaUseCase()


        const inscribirTorneoController = new TorneoControllerExpress(inscribirTorneoUseCase, getParticipantesSalaUseCase)

        const TorneoRouter = new TorneoRouterExpres(inscribirTorneoController)

        return TorneoRouter
    }
}