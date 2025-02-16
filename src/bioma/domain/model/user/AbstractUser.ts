import { AbstractPlayedDays } from "../played_days/AbstractPlayedDays";
import { AbstractPerson } from "../shared/abstractPerson";
import { UserInterface } from "../types/userInterface";

export abstract class abstractUser  extends AbstractPerson {

    protected id_user: number;
    protected user_name: string;
    protected password: string;
    protected pet_name?: string;
    protected played_days?: AbstractPlayedDays;
    protected streak?: string;
    protected last_date_added?: Date;
    protected league?: string;
    
    constructor( dato:UserInterface  ) {
        super(dato.name, dato.email);
        this.id_user = dato.id_user;
        this.user_name = dato.user_name;
        this.password = dato.password;
    }

    // Métodos para actualizar valores opcionales
    setPetName(pet_name: string): void {
        this.pet_name = pet_name;
    }

    setPlayedDays(played_days: AbstractPlayedDays): void {
        this.played_days = played_days;
    }

    setStreak(streak: string): void {
        this.streak = streak;
    }

    setLastDateAdded(last_date_added: Date): void {
        this.last_date_added = last_date_added;
    }

    setLeague(league: string): void {
        this.league = league;
    }
        
    abstract isNull(): boolean;

}


