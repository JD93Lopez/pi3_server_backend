import mysql, { Connection } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();  // Cargar las variables de entorno
export default class Database {
    private static connection: Connection;

    public static async getConnection(): Promise<Connection> {
        if (!Database.connection) {
            await Database.connect();
        }
        return Database.connection;
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
        
        Database.connection = await mysql.createConnection({
            host: host,  
            port: Number(port),  
            user: user,  
            password: password,  
            database: database,  
            ssl: {
                ca: './ca.pem',
                rejectUnauthorized: false // Desactivar la validación del certificado
            }
        });
        console.log('Conexión a la base de datos establecida');
    }

    public static async executeQuery(query: string, params: any[] = []): Promise<any> {
        try {
            const connection = await Database.getConnection();
            const [rows] = await connection.execute(query, params);
            return Promise.resolve(rows);
        } catch (error) {
            console.error('Error en la consulta:', error);
            return Promise.resolve([]);
        }
    }
}