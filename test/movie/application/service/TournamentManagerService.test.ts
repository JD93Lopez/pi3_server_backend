import { TournamentManagerService } from "../../../../src/torneo/application/service/TournamentManagerService";
import { RankName } from "../../../../src/torneo/domain/model/RankName";
import { TournamentManager } from "../../../../src/torneo/domain/model/TournamentManager";
import { createTournamentTestUser } from "./CreateTestUser";
import { wait } from "./TestUtils";

describe('TournamentManagerService Tournament Created',  () => {
  let tournamentManager: TournamentManager;

  const user1 = createTournamentTestUser(1, "Test User", RankName.DIAMOND);
  const user2 = createTournamentTestUser(2, "Test User", RankName.BRONZE);
  const user3 = createTournamentTestUser(3, "Test User", RankName.DIAMOND);

  beforeAll(async () => {
    const tournamentManagerService = new TournamentManagerService();
    const startDate = new Date(Date.now()+100); // 0.1 segundos después de la fecha actual
    tournamentManagerService.setStartDate(startDate);
    tournamentManagerService.setEndDate(new Date(startDate.getTime() + 1000 * 2)); // 2 segundos después de la fecha de inicio
    tournamentManager = tournamentManagerService.getInstance();
  });

  test('inscribir(user: AbstractUser) antes de iniciar para revisar participando', () => {
    const user = user1;
    const res = tournamentManager.inscribir(user);
    tournamentManager.inscribir(user3);
    expect(res).toBe(true); // Debe devolver true porque el usuario se inscribió correctamente
  });

  describe('TournamentManagerService Tournament Started',  () => {

    beforeAll(async () => {
      await wait(200); // Wait for 0.2 seconds to ensure the tournament has started
    });

    test('should be initialized', () => {
      tournamentManager.anadirExperiencia(user3.getIdUser(), user3.getLeague(), 1000);
      expect(tournamentManager).toBeDefined();
    });

    test('should have a tournament manager instance', () => {
      expect(tournamentManager).toBeInstanceOf(TournamentManager);
    });

    test('estaInscritoObtenerTiempoRestante(userId: number) debe devolver -1', () => {
      const user = user1;
      const tiempoRestante = tournamentManager.estaInscritoObtenerTiempoRestante(user.getIdUser());
      expect(tiempoRestante).toBe(-1); // Debe devolver -1 porque no esta inscrito
    });

    test('tras inscribir(user: AbstractUser) estaParticipandoObtenerSala((userId: number, league: string)) debe devolver un array con al menos un usuario', () => {
      const user = user1;
      const users = tournamentManager.estaParticipandoObtenerSala(user.getIdUser(), user.getLeague());
      expect(users.length).toBeGreaterThan(0); // Debe devolver un array con al menos un usuario
    });

    test('tras inscribir(user: AbstractUser) estaInscritoObtenerTiempoRestante(userId: number) debe devolver un número positivo', () => {
      const user = user2;
      tournamentManager.inscribir(user);
      const tiempoRestante = tournamentManager.estaInscritoObtenerTiempoRestante(user.getIdUser());
      expect(tiempoRestante).toBeGreaterThan(0); // Debe devolver un número positivo
    });

    describe('TournamentManagerService Tournament Ended',  () => {

      beforeAll(async () => {
        await wait(2000); // Esperar 2 segundos para que el torneo termine
      });

      test('tras finalizar() estaInscritoObtenerTiempoRestante(userId: number) debe devolver -2', () => {
        const user = user2;
        tournamentManager.inscribir(user);
        const tiempoRestante = tournamentManager.estaInscritoObtenerTiempoRestante(user.getIdUser());
        expect(tiempoRestante).toBe(-2); // Debe devolver -2 porque el torneo ha terminado
      });

    })

  })
})