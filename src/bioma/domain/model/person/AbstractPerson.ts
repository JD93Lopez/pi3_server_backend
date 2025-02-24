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