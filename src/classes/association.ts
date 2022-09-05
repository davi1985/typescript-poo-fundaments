export class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  public get name(): string {
    return this._name;
  }

  public set tool(tool: Tool | null) {
    if (tool) {
      this._tool = tool;
    }
  }

  public get tool(): Tool | null {
    return this._tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log("It is not possile to continue without an tool.");
    }

    return this.tool!.write();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}

  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  write(): void {
    console.log(`${this.name} is writing`);
  }
}

export class TypeWrite extends Tool {
  write(): void {
    console.log(`${this.name} is writing`);
  }
}

// example
const writer = new Writer("Davi Silva");
const pen = new Pen("Bic");
const typeWrite = new TypeWrite("Other");

writer.tool = pen;
writer.write();

writer.tool = typeWrite;
writer.write();
