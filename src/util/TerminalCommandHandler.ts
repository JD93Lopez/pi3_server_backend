import * as readline from 'readline';
import { TournamentManagerService } from '../torneo/application/service/TournamentManagerService';
import { TournamentManager } from '../torneo/domain/model/TournamentManager';
import { createTournamentTestUser } from '../../test/torneo/application/service/CreateTestUser';
import { RankName } from '../torneo/domain/model/RankName';

class TerminalCommandHandler {
    private rl: readline.Interface;

    private tournamentManager: TournamentManager = new TournamentManagerService().getInstance();

    constructor() {
        // Configuramos la interfaz de lectura para leer desde la terminal
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: '> ', // Prompt personalizado para indicar que espera un comando
        });

        // Iniciamos el prompt
        this.rl.prompt();

        // Escuchamos los eventos de entrada
        this.rl.on('line', (input: string) => {
            this.handleCommand(input.trim());
            this.rl.prompt(); // Volvemos a mostrar el prompt después de procesar el comando
        }).on('close', () => {
            console.log('Terminal cerrada. Saliendo...');
            process.exit(0); // Salimos del proceso si se cierra la terminal
        });
    }

    private handleCommand(command: string): void {
        // Aquí puedes agregar lógica para manejar diferentes comandos
        switch (command.toLowerCase()) {
            case 'saludar':
                console.log('¡Hola desde el servidor!');
                break;
            case 'detener':
                console.log('Deteniendo el servidor...');
                process.exit(0); // Detenemos el servidor
                break;
            default:
                this.handleTorneoCommand( command );
        }
    }

    private handleTorneoCommand( command: string ): void {
        switch (command.toLowerCase()) {
            case 'torneo iniciar':
            case 'torneo i':
                this.torneoIniciar();
                break;
            case 'torneo finalizar':
            case 'torneo f':
                console.log('Finalizando torneo...');
                this.tournamentManager.finalizar();
                console.log('Torneo finalizado.');
                break;
            case 'torneo xp':
                this.torneoXp();
                break;
            case 'torneo inscrito':
            case 'torneo ins':
                this.torneoInscrito();
                break;
            case 'torneo test users':
            case 'torneo test us':
                this.torneoTestUsers();
                break;
            case 'torneo test user':
            case 'torneo test u':
                this.torneoTestUser();
                break;
            case 'torneo cancelar':
            case 'torneo c':
                console.log('Cancelando torneo...');
                this.tournamentManager.cancelarTorneo();
                break;
            case 'torneo list inscription':
            case 'torneo list ins':
            case 'torneo list i':
                console.log('Lista de inscritos en el torneo: ', this.tournamentManager.getInscriptionList());
                break;
            case 'torneo list users':
            case 'torneo list u':
                console.log('Lista de usuarios en el torneo: ', this.tournamentManager.getParticipatingUsers());
                break;
            default:
                console.log(`Comando desconocido: "${command}".`);
        }
    }



    private torneoInscrito(): void {
        this.rl.question('ID Usuario: ', (userId) => {
            const userIdNumber = parseInt(userId, 10);
            if (isNaN(userIdNumber)) {
                console.log('Por favor, introduce un número válido.');
            } else {
                const tiempoRestante = this.tournamentManager.estaInscritoObtenerTiempoRestante(userIdNumber);
                if (tiempoRestante === -1) {
                    console.log(`El usuario con ID ${userId} no está inscrito en el torneo.`);
                } else {
                    console.log(`El usuario con ID ${userId} está inscrito en el torneo. Tiempo restante: ${tiempoRestante} segundos.`);
                }
            }
            this.rl.prompt();
        });
    }

    private torneoIniciar(): void {
        console.log('Iniciando torneo...');
        const now = new Date();
        const nextSunday = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + ((7 - now.getDay()) % 7) + 7 // Ensure it's the next Sunday
        );
        nextSunday.setHours(23, 59, 0, 0);
        this.tournamentManager.iniciar(nextSunday);
        this.rl.prompt();
    }

    private torneoXp(): void {
        this.rl.question('ID Usuario: ', (userId) => {
            this.rl.question('XP Sumada: ', (xpInput) => {
                const xp = parseInt(xpInput, 10);
                if (isNaN(xp)) {
                    console.log('Por favor, introduce un número válido.');
                } else {
                    const success = this.tournamentManager.anadirExperiencia(parseInt(userId), xp);
                    if (success) {
                        console.log(`Se ha asignado ${xp} XP al usuario con ID ${userId} en el torneo.`);
                    } else {
                        console.log(`No se pudo asignar XP al usuario con ID ${userId}.`);
                    }
                }
                this.rl.prompt();
            });
        });
    }

    private torneoTestUser(): void {
        this.rl.question('ID Usuario: ', (userId) => {
            const userIdNumber = parseInt(userId, 10);
            if (isNaN(userIdNumber)) {
                console.log('Por favor, introduce un número válido.');
            } else {
                const user = createTournamentTestUser(userIdNumber, "Test User", RankName.BRONZE);
                this.tournamentManager.inscribir(user);
                console.log(`Usuario de prueba creado e inscrito en el torneo con ID ${userId}.`);
            }
            this.rl.prompt();
        });
    }

    private torneoTestUsers(): void {
        console.log('Creando usuarios de prueba...');

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

        this.tournamentManager.inscribir(user1);
        this.tournamentManager.inscribir(user2);
        this.tournamentManager.inscribir(user3);
        this.tournamentManager.inscribir(user4);
        this.tournamentManager.inscribir(user5);
        this.tournamentManager.inscribir(user6);
        this.tournamentManager.inscribir(user7);
        this.tournamentManager.inscribir(user8);
        this.tournamentManager.inscribir(user9);
        this.tournamentManager.inscribir(user10);
        this.tournamentManager.inscribir(user11);
        this.tournamentManager.inscribir(user12);
        this.tournamentManager.inscribir(user13);
        this.tournamentManager.inscribir(user14);
        this.tournamentManager.inscribir(user15);
        this.tournamentManager.inscribir(user16);
        this.tournamentManager.inscribir(user17);
        this.tournamentManager.inscribir(user18);
        this.tournamentManager.inscribir(user19);
        this.tournamentManager.inscribir(user20);
        this.tournamentManager.inscribir(user21);
        this.tournamentManager.inscribir(user22);

        console.log('Usuarios de prueba creados e inscritos en el torneo.');
    }
}

export default TerminalCommandHandler;