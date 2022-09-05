export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number
  ) {}

  blow(character: Character): void {
    this.staff();
    console.log(`${this.name} is attacking`);
    character.lessLife(this.attack);
  }

  lessLife(attackValue: number): void {
    this.life -= attackValue;

    console.log(`${this.name} has ${this.life} `);
  }

  abstract staff(): void;
}

export class Warrior extends Character {
  protected emoji: string = "\u{1F9DD}";

  staff(): void {
    console.log(`${this.emoji} - HAAAAAAAAAAA`);
  }
}

export class Monster extends Character {
  protected emoji: string = "\u{1F9DF}";

  staff(): void {
    console.log(`${this.emoji} -HEEEEEEEEEEEEEEEE`);
  }
}

// example
const warrior = new Warrior("Warrior", 100, 1000);
const monster = new Monster("Monster", 87, 1000);

warrior.blow(monster);
warrior.blow(monster);
monster.blow(warrior);
