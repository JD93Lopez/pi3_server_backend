import mysql, { Connection } from 'mysql2/promise';

export default class Database {
    private static connection: Connection;

    public static async getConnection(): Promise<Connection> {
        if (!Database.connection) {
            Database.connection = await mysql.createConnection({
                host: 'localhost',  
                user: 'root',  
                password: 'root',  
                database: 'desweb_pf'
            });
            console.log('Conexión a la base de datos establecida');
        }
        return Database.connection;
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