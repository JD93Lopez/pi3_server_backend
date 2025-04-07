import { User } from "../../../../src/bioma/domain/model/user/User";
import { TournamentManagerService } from "../../../../src/torneo/application/service/TournamentManagerService";
import { RankName } from "../../../../src/torneo/domain/model/RankName";
import { TournamentManager } from "../../../../src/torneo/domain/model/TournamentManager";

const createTournamentTestUser = (id_user: number, name: string, league: RankName) => {
  return new User({
    id_user: id_user,
    user_name: "Not a name provided",
    pet_name: "Not a pet name provided",
    email: "Not an email provided",
    password: "Not a password provided",
    name: name,
    education: "Not an education provided",
    birthdate: new Date(),
    telephone: "Not a telephone provided",
    sex: 'N',
    occupation: "Not an occupation provided",
    time_played_total: 0,
    questions_learned_total: 0,
    received_xp_total: 0,
    streak: "Not a streak provided",
    last_date_added: new Date(),
    league: league.toString(),
    biomes: []
  });
}

describe('TournamentManagerService',  () => {
  let tournamentManager: TournamentManager;

  beforeAll(() => {
    const tournamentManagerService = new TournamentManagerService();
    tournamentManager = tournamentManagerService.getInstance();
  });

  test('should be initialized', () => {
    expect(tournamentManager).toBeDefined();
  });

  test('should have a tournament manager instance', () => {
    expect(tournamentManager).toBeInstanceOf(TournamentManager);
  });

  test('tras inscribir(user: AbstractUser) estaInscritoObtenerTiempoRestante(userId: number) debe devolver un número positivo', () => {
    const user = createTournamentTestUser(1, "Test User", RankName.BRONZE);
    tournamentManager.inscribir(user);
    const tiempoRestante = tournamentManager.estaInscritoObtenerTiempoRestante(user.getIdUser());
    expect(tiempoRestante).toBeGreaterThan(0); // Debe devolver un número positivo
  })

})