import ExpressFactory from './express/infrastructure/factory/ExpressFactory'
import { TournamentManagerService } from './torneo/application/service/TournamentManagerService'
import TerminalCommandHandler from './util/TerminalCommandHandler';

const tournamentManagerService = new TournamentManagerService();
tournamentManagerService.setUp();

const terminalCommandHandler = new TerminalCommandHandler();
terminalCommandHandler;

const server = ExpressFactory.create();
server.start();