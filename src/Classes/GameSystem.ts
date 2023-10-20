export class GameSystem {
  name: string;
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }
}