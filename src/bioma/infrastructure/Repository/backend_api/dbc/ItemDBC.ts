import Database from "../../Database";

export default class ItemDBC{

    public async buyItem(user_id: number, item_id: number): Promise<number> {
        if (user_id === undefined || user_id === null) {
            throw new Error("user_id is required but is undefined or null");
        }
    
        await Database.getConnection();
    
        const query = "SELECT BuyItem(?, ?) AS result";
        const result = await Database.executeQuery(query, [user_id, item_id]);
    
        if (!result || !result[0] || typeof result[0].result !== 'number') {
            throw new Error("Unexpected db result");
        }
    
        return result[0].result;
    }


    public async getStoreItems(user_id: number): Promise<any[]> {
        if (user_id === undefined || user_id === null) {
            throw new Error("user_id is required but is undefined or null");
        }
    
        await Database.getConnection();
    
        const query = "CALL getStoreItems(?)";
        const result = await Database.executeQuery(query, [user_id]);
    
        if (!result || !Array.isArray(result)) {
            throw new Error("Unexpected db result");
        }
        
        const data = Object.values(result)[0];

        return data;
    }


}