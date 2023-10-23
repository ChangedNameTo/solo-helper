export class BaseCharacter {
  private name: string;
  private description: string;

  constructor(name: string, description: string) {
    this.name = name || "New Character";
    this.description = description || "";
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }
}