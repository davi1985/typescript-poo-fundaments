type PersonType = {
  name: string;
  lastname: string;
  fullName: () => string; 
};

export class Person implements PersonType {
  constructor(public name: string, public lastname: string) {}

  fullName(): string {
    return `${this.name} ${this.lastname}`;
  }
}

const person = new Person("Davi", "Silva");

console.log(person);
