export class Person {
  static initialAge = 0;
  static initialCpf = "000.000.000-00";

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public cpf: string
  ) {}

  static showStaticPropertiesValues(): (string | number)[] {
    return [Person.initialAge, Person.initialCpf];
  }

  static hello(): string {
    return "Hello World";
  }

  static newPerson(firstName: string, lastName: string): Person {
    return new Person(
      firstName,
      lastName,
      Person.initialAge,
      Person.initialCpf
    );
  }
}

// example
console.log(Person.newPerson("Davi", "Silva"));

console.log(Person.showStaticPropertiesValues());
