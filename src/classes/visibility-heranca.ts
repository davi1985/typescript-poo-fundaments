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

const student = new Student("Davi", "Silva", 36, "000.111.222-33");
const client = new Client("João", "Silva", 36, "000.111.222-33");

console.log(student.getFullName());
console.log(client.getFullName());
