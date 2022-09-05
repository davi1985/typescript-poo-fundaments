export class Person {
  constructor(
    private _firstName: string,
    private _lastName: string,
    private _age: number,
    private _cpf: string
  ) {}

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }
}

// example

const person = new Person("Davi", "Silva", 36, "123.456.789-88");

// set
person.firstName = "Other Name";

// get
console.log(person.firstName);
