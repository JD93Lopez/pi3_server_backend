export type Sex = 'M' | 'F' | 'N';

export abstract class AbstractPerson {

    protected name: string;
    protected email: string;
    protected education?: string;
    protected birthdate?: Date;
    protected telephone?: string;
    protected sex?: string;
    protected occupation?: string;


    constructor(name: string, email: string ) {
        this.name = name;
        this.email = email;
    }

  // TODO:  Métodos para actualizar valores opcionales
  setEducation(education: string): void {
    this.education = education;
    }

    setBirthdate(birthdate: Date): void {
        this.birthdate = birthdate;
    }

    setTelephone(telephone: string): void {
        this.telephone = telephone;
    }

    setSex(sex: Sex): void {
        this.sex = sex;
    }

    setOccupation(occupation: string): void {
        this.occupation = occupation;
    }
}
