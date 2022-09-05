export class Company {
  public readonly name: string; // public is optional
  private readonly cnpj: string;
  protected readonly collaborators: Collaborator[] = [];

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
  // dentro do contructor public/protected/private é obrigatório
  constructor(
    public readonly firstName: string,
    public readonly lastName: string
  ) {}
}

export class Udemy extends Company {
  constructor() {
    super("Udemy", "11.111.111/0001-11");
  }

  removeCollaborator(): Collaborator | null {
    const collaborator = this.collaborators.pop();

    if (collaborator) return collaborator;

    return null;
  }
}

// exemple
const udemy = new Udemy();
const collaborator1 = new Collaborator("Jhon", " Doe");
const collaborator2 = new Collaborator("Other", " Person");

udemy.addCollaborator(collaborator1);
udemy.addCollaborator(collaborator2);

console.log(udemy.removeCollaborator());
