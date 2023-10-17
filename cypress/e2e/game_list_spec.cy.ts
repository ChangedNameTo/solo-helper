describe("Tests GameList functions", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("See's no games on initial load", () => {
    cy.get("[data-testid=game-list]").children().should("have.length", 0);
  });

  it("Adds a game", () => {
    cy.get("[data-testid=game-list]").children().should("have.length", 0);

    cy.get("[data-testid=add-game-button]").click();

    cy.get("[data-testid=game-list]").children().should("have.length", 1);
  });
  
  it("Adds two games", () => {
    cy.get("[data-testid=game-list]").children().should("have.length", 0);

    cy.get("[data-testid=add-game-button]").click();
    cy.get("[data-testid=add-game-button]").click();

    cy.get("[data-testid=game-list]").children().should("have.length", 2);
  });

  it("Deletes a game", () => {
    cy.get("[data-testid=game-list]").children().should("have.length", 0);
    cy.get("[data-testid=add-game-button]").click();
    cy.get("[data-testid=game-list]").children().should("have.length", 1);

    cy.get("[data-testid=delete-game-button]").click();
    cy.get("[data-testid=game-list]").children().should("have.length", 0);
  });
});
