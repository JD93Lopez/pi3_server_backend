import { AbstractPerson, typeSex } from "../shared/AbstractPerson";

export abstract class AbstractUser extends AbstractPerson {

    protected id_user: number;
    protected user_name: string;
    protected password: string;
    protected pet_name: string;
    protected streak: string;
    protected last_date_added: Date;
    protected league: string;
    protected time_played_total: number;
    protected questions_learned_total: number;
    protected received_xp_total: number;
    
    constructor(dato: UserAttributes) {
        super(dato.name, dato.email, dato.education, dato.birthdate, dato.telephone, dato.sex, dato.occupation);
        this.id_user = dato.id_user;
        this.user_name = dato.user_name;
        this.password = dato.password;
        this.pet_name = dato.pet_name;
        this.streak = dato.streak;
        this.last_date_added = dato.last_date_added;
        this.league = dato.league;
        this.time_played_total = dato.time_played_total;
        this.questions_learned_total = dato.questions_learned_total;
        this.received_xp_total = dato.received_xp_total;
        
    }

    abstract isNull(): boolean;

}

export default interface UserAttributes {
    id_user: number;
    user_name: string;
    email: string,
    password: string;
    name: string, 
    pet_name: string;
    education: string, 
    birthdate: Date,
    telephone:string, 
    sex: typeSex, 
    occupation: string,
    time_played_total: number;
    questions_learned_total: number;
    received_xp_total: number;
    streak: string;
    last_date_added: Date;
    league: string; 
}