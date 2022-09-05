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
  // dentro do contructor public/protected/private é obrigatório
  constructor(
    public readonly firstName: string,
    public readonly lastName: string
  ) {}
}
