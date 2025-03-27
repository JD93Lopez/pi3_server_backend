import { AbstractBiome } from "../biome/AbstractBiome";
import { AbstractPerson } from "../person/AbstractPerson";

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
    protected biomes: AbstractBiome[];
    
    constructor(dato: UserAttributes) {
        super({
            name: dato.name, email: dato.email, education: dato.education, birthdate: dato.birthdate, 
            telephone: dato.telephone, sex: dato.sex, occupation: dato.occupation
        });
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
        this.biomes = dato.biomes;
    }

    getIdUser(): number {
        return this.id_user;
    }

    getUserName(): string {
        return this.user_name;
    }

    getPassword(): string {
        return this.password;
    }

    getPetName(): string {
        return this.pet_name;
    }

    getStreak(): string {
        return this.streak;
    }

    getLastDateAdded(): Date {
        return this.last_date_added;
    }

    getLeague(): string {
        return this.league;
    }

    getTimePlayedTotal(): number {
        return this.time_played_total;
    }

    getQuestionsLearnedTotal(): number {
        return this.questions_learned_total;
    }

    getReceivedXpTotal(): number {
        return this.received_xp_total;
    }

    getBiomes(): AbstractBiome[] {
        return this.biomes;
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
    sex: string, 
    occupation: string,
    time_played_total: number;
    questions_learned_total: number;
    received_xp_total: number;
    streak: string;
    last_date_added: Date;
    league: string; 
    biomes: AbstractBiome[];
}