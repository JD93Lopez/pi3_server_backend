export type typeSex = 'M' | 'F' | 'N';

export abstract class AbstractPerson {
    
    protected name: string;
    protected email: string;
    protected education: string;
    protected birthdate: Date;
    protected telephone: string;
    protected sex: string;
    protected occupation: string;

    constructor(name: string, email: string, education: string, birthdate: Date, telephone:string, sex: typeSex, occupation: string) {
        this.name = name;
        this.email = email;
        this.education = education;
        this.birthdate = birthdate;
        this.telephone = telephone;
        this.sex = sex;
        this.occupation = occupation;
    }
}
