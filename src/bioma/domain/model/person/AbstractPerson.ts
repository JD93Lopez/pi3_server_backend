export type typeSex = 'M' | 'F' | 'N';

export abstract class AbstractPerson {
    
    protected name: string;
    protected email: string;
    protected education: string;
    protected birthdate: Date;
    protected telephone: string;
    protected sex: string;
    protected occupation: string;

    constructor(personAttributes: PersonAttributes) {
        this.name = personAttributes.name;
        this.email = personAttributes.email;
        this.education = personAttributes.education;
        this.birthdate = personAttributes.birthdate;
        this.telephone = personAttributes.telephone;
        this.sex = personAttributes.sex;
        this.occupation = personAttributes.occupation;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

    getEducation(): string {
        return this.education;
    }

    getBirthdate(): Date {
        return this.birthdate;
    }

    getTelephone(): string {
        return this.telephone;
    }

    getSex(): string {
        return this.sex;
    }

    getOccupation(): string {
        return this.occupation;
    }
}

export interface PersonAttributes {
    name: string;
    email: string;
    education: string;
    birthdate: Date;
    telephone: string;
    sex: string;
    occupation: string;
}