import ExpressFactory from './express/infrastructure/factory/ExpressFactory'
import { TournamentManagerService } from './torneo/application/service/TournamentManagerService'

const tournamentManagerService = new TournamentManagerService();
tournamentManagerService.setUp();

const server = ExpressFactory.create();
server.start();