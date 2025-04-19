import { TournamentManagerService } from "../../../../src/torneo/application/service/TournamentManagerService";
import { Rank } from "../../../../src/torneo/domain/model/Rank";
import { RankName } from "../../../../src/torneo/domain/model/RankName";
import { Tournament } from "../../../../src/torneo/domain/model/Tournament";
import { TournamentManager } from "../../../../src/torneo/domain/model/TournamentManager";
import { createTournamentTestUser } from "./CreateTestUser";
import { wait } from "./TestUtils";

describe('TournamentManagerService Tournament Created',  () => {
  let tournamentManager: TournamentManager;

  const user1 = createTournamentTestUser(1, "Test User", RankName.BRONZE);
  const user2 = createTournamentTestUser(2, "Test User", RankName.BRONZE);
  const user3 = createTournamentTestUser(3, "Test User", RankName.BRONZE);
  const user4 = createTournamentTestUser(4, "Test User", RankName.BRONZE);
  const user5 = createTournamentTestUser(5, "Test User", RankName.BRONZE);
  
  const user6 = createTournamentTestUser(6, "Test User", RankName.SILVER);
  const user7 = createTournamentTestUser(7, "Test User", RankName.SILVER);
  const user8 = createTournamentTestUser(8, "Test User", RankName.SILVER);
  const user9 = createTournamentTestUser(9, "Test User", RankName.SILVER);  

  const user10 = createTournamentTestUser(10, "Test User", RankName.GOLD);
  const user11 = createTournamentTestUser(11, "Test User", RankName.GOLD);
  const user12 = createTournamentTestUser(12, "Test User", RankName.GOLD);
  const user13 = createTournamentTestUser(13, "Test User", RankName.GOLD);

  const user14 = createTournamentTestUser(14, "Test User", RankName.PLATINUM);
  const user15 = createTournamentTestUser(15, "Test User", RankName.PLATINUM);
  const user16 = createTournamentTestUser(16, "Test User", RankName.PLATINUM);
  const user17 = createTournamentTestUser(17, "Test User", RankName.PLATINUM);

  const user18 = createTournamentTestUser(18, "Test User", RankName.DIAMOND);
  const user19 = createTournamentTestUser(19, "Test User", RankName.DIAMOND);
  const user20 = createTournamentTestUser(20, "Test User", RankName.DIAMOND);
  const user21 = createTournamentTestUser(21, "Test User", RankName.DIAMOND);
  const user22 = createTournamentTestUser(22, "Test User", RankName.DIAMOND);

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
    tournamentManager.inscribir(user2);
    tournamentManager.inscribir(user3);
    tournamentManager.inscribir(user4);
    tournamentManager.inscribir(user5);
    tournamentManager.inscribir(user6);
    tournamentManager.inscribir(user7);
    tournamentManager.inscribir(user8);
    tournamentManager.inscribir(user9);
    tournamentManager.inscribir(user10);
    tournamentManager.inscribir(user11);
    tournamentManager.inscribir(user12);
    tournamentManager.inscribir(user13);
    tournamentManager.inscribir(user14);
    tournamentManager.inscribir(user15);
    tournamentManager.inscribir(user16);
    tournamentManager.inscribir(user17);
    tournamentManager.inscribir(user18);
    tournamentManager.inscribir(user19);
    tournamentManager.inscribir(user20);
    tournamentManager.inscribir(user21);
    tournamentManager.inscribir(user22);
    expect(res).toBe(true); // Debe devolver true porque el usuario se inscribió correctamente
  });

  describe('TournamentManagerService Tournament Started',  () => {

    let tournament: Tournament;

    beforeAll(async () => {
      await wait(200); // Wait for 0.2 seconds to ensure the tournament has started
      tournament  = tournamentManager.getTournament();
    });

    test('should be initialized', () => {
      expect(tournamentManager).toBeDefined();
    });

    test('anadirExperiencia(userId: number, xp: number) debe devolver true', () => {
      const res = tournamentManager.anadirExperiencia(user3.getIdUser(), 1234);
      expect(res).toBe(true);
      expect(user3.getReceivedXpTotal()).toBe(1234);
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
      expect(users.length).toBe(5); // Debe devolver un array con 5 usuarios
    });

    test('tras inscribir(user: AbstractUser) estaInscritoObtenerTiempoRestante(userId: number) debe devolver un número positivo', () => {
      const user = user2;
      tournamentManager.inscribir(user);
      const tiempoRestante = tournamentManager.estaInscritoObtenerTiempoRestante(user.getIdUser());
      expect(tiempoRestante).toBeGreaterThan(0); // Debe devolver un número positivo
    });

    test('tras finalizar torneo los usuarios se clasifican correctamente', () => {
      const users = tournament.finalizar();

      const bronzeUsers = users.filter(user => Rank.toRankName(user.getLeague()) === RankName.BRONZE);
      expect(bronzeUsers.length).toBe(3); // Debe devolver 3 usuarios con rango BRONZE

      const silverUsers = users.filter(user => Rank.toRankName(user.getLeague()) === RankName.SILVER);
      expect(silverUsers.length).toBe(6); // Debe devolver 6 usuarios con rango SILVER

      const goldUsers = users.filter(user => Rank.toRankName(user.getLeague()) === RankName.GOLD);
      expect(goldUsers.length).toBe(5); // Debe devolver 5 usuarios con rango GOLD

      const platinumUsers = users.filter(user => Rank.toRankName(user.getLeague()) === RankName.PLATINUM);
      expect(platinumUsers.length).toBe(5); // Debe devolver 5 usuarios con rango PLATINUM

      const diamondUsers = users.filter(user => Rank.toRankName(user.getLeague()) === RankName.DIAMOND);
      expect(diamondUsers.length).toBe(3); // Debe devolver 3 usuarios con rango DIAMOND

      expect(users.length).toBe(22); // Debe devolver 22 usuarios clasificados
    })

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