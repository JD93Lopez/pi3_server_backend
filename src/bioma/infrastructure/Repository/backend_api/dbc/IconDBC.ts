import Database from "../../Database"

export default class IconDBC {

    public async getIconById(id_icon: number): Promise<any> {
        await Database.getConnection()
        const query = `select * from ICONS where id_icon=${id_icon}`
        let res = await Database.executeQuery(query)
        return res[0]
    }

}