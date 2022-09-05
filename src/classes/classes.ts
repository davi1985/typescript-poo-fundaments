export class Company {
  public readonly name: string; // public is optional
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = name;
  }

  addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  showCollaborators(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator.firstName);
    }
  }
}

export class Collaborator {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string
  ) {}
}

// example
const company1 = new Company("Microsoft", "11.111.111/0001-11");
const collaborator1 = new Collaborator("Davi", "Silva");
const collaborator2 = new Collaborator("João", "Silva");
const collaborator3 = new Collaborator("Maria", "Silva");

company1.addCollaborator(collaborator1);
company1.addCollaborator(collaborator2);
company1.addCollaborator(collaborator3);

console.log(company1.showCollaborators());
