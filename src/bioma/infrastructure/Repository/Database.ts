import mysql, { Connection } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();  // Cargar las variables de entorno

export default class Database {
    private static connection: Connection | null = null;

    public static async getConnection(): Promise<Connection> {
        if (!Database.connection || !(await Database.isConnectionAlive())) {
            await Database.connect();
        }
        return Database.connection!;
    }

    public static async connect(): Promise<void> {
        const host = process.env['HOST_DATABASE'];
        const port = process.env['PORT_DATABASE'];
        const user = process.env['USER_DATABASE'];
        const password = process.env['PASSWORD_DATABASE'];
        const database = process.env['DATABASE'];

        if (!host || !port || !user || !password || !database) {
            console.error('Faltan datos de conexión a la base de datos');
            return Promise.reject('Faltan datos de conexión a la base de datos');
        }

        try {
            Database.connection = await mysql.createConnection({
                host: host,
                port: Number(port),
                user: user,
                password: password,
                database: database,
                ssl: {
                    ca: './ca.pem',
                    rejectUnauthorized: false
                }
            });
            console.log('Conexión a la base de datos establecida');
        } catch (error) {
            console.error('Error al conectar a la base de datos:', error);
            throw error;
        }
    }

    // Método para verificar si la conexión sigue activa
    private static async isConnectionAlive(): Promise<boolean> {
        try {
            await Database.connection?.query('SELECT 1');
            return true;
        } catch (error) {
            console.warn('La conexión está caída o inválida', error);
            return false;
        }
    }

    public static async executeQuery(query: string, params: any[] = []): Promise<any> {
        let retries = 0;
        const maxRetries = 2;

        while (retries <= maxRetries) {
            try {
                const connection = await Database.getConnection();
                const [rows] = await connection.execute(query, params);
                return rows; // Devuelve los resultados
            } catch (error: any) {
                console.error(`Error en la consulta (intentos: ${retries}):`, error.message);

                // Si el error es por conexión perdida, limpiar y reintentar
                if (
                    error.code === 'PROTOCOL_CONNECTION_LOST' ||
                    error.code === 'ECONNRESET' ||
                    error.code === 'ENOTFOUND' ||
                    error.message.includes('read ECONNRESET') ||
                    error.message.includes('handshake')
                ) {
                    retries++;
                    Database.connection = null; // Forzar reconexión
                    continue;
                }

                // En cualquier otro error, loguea y devuelve []
                console.warn('Devolviendo arreglo vacío por error en consulta');
                return []; // ✅ Devuelve arreglo vacío y no rechaza la promesa
            }
        }

        // Si se agotaron los reintentos, también devuelve []
        console.warn('Se agotaron los intentos. Devolviendo arreglo vacío.');
        return [];
    }
}