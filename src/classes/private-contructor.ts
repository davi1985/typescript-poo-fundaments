// Singleton | Factory
export class Database {
  private static instance: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  connect(): string {
    return `Connected: ${this.host}, ${this.user}, ${this.user}`;
  }

  // factory method
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.instance) return Database.instance;

    Database.instance = new Database(host, user, password);

    return Database.instance;
  }

  hasInstance(): boolean {
    return Database.instance ? true : false;
  }
}

const database = Database.getDatabase("localhost", "root", "1234");

console.log(database.connect());
console.log(database.hasInstance());
