// super class
export abstract class Person {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    private readonly age: number,
    protected readonly cpf: string
  ) {}

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }
}

export class Student extends Person {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    cpf: string,
    public readonly room: string
  ) {
    super(firstName, lastName, age, cpf);
  }

  // override super class method
  getFullName(): string {
    return "studend name: " + super.getFullName();
  }
}

export class Client extends Person {
  // override super class method
  getFullName(): string {
    return "client name: " + super.getFullName();
  }
}

// example
const student = new Student("Davi", "Silva", 36, "001.002.003-44", "001");

console.log(student);
