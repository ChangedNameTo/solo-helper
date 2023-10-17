describe("Tests selecting games from the GameList", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const addGame = () => {
    cy.get("[data-testid=add-game-button]").click();
  }

  const hasRows = (numberRows: number) => {
    cy.get("[data-testid=games-list-item]").should("have.length", numberRows);
  }

  it("Adds a game sees the selection button", () => {
    addGame()
    cy.get("[data-testid=select-game-button]").should("exist")
  });

  it("Adds a game and selects it", () => {
    addGame()
    cy.get("[data-testid=select-game-button]").click()
    cy.contains("Game Selected")
  });

  it("Adds two games and selects one", () => {
    addGame()
    addGame()
    cy.get("[data-testid=select-game-button]").eq(0).click()
    cy.contains("Game Selected")
  });

  it("Adds two games and selects the other", () => {
    addGame()
    addGame()
    cy.get("[data-testid=select-game-button]").eq(1).click()
    cy.contains("Game Selected")
  });

  it("Adds a game and selects it, then deselects it", () => {
    addGame()
    cy.get("[data-testid=select-game-button]").click()
    cy.contains("Game Selected")
    cy.get("[data-testid=deselect-game-button]").click()
    cy.get("[data-testid=select-game-button]").should("exist")
  });
});
