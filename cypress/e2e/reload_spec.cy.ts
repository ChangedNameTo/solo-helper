describe("Tests what happens to game list data after refreshing the page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const addGame = () => {
    cy.get("[data-testid=add-game-button]").click();
  }

  const hasRows = (numberRows: number) => {
    cy.get("[data-testid=games-list-item]").should("have.length", numberRows);
  }

  const refreshPage = () => {
    cy.reload();
  }

  it("Adds a game, refreshes it, and sees the game on reload", () => {
    addGame()
    refreshPage()
    hasRows(1)
  });
  
  it("Adds two games, refreshes it, and sees two games on reload", () => {
    addGame()
    addGame()
    refreshPage()
    hasRows(2)
  });

  it("Adds a game, refreshes the page, then adds another game, and sees two games on reload", () => {
    addGame()
    refreshPage()
    hasRows(1)
    addGame()
    refreshPage()
    hasRows(2)
  });
  
  it("Adds a game and selects it, refreshes the page, and the game is still selected", () => {
    addGame()
    cy.get("[data-testid=select-game-button]").click()
    refreshPage()
    cy.get("[data-testid=deselect-game-button]").click()
    refreshPage()
    cy.get("[data-testid=select-game-button]").should("exist")
  });
  
  it("Adds a game and selects it, refreshes the page, and the game is still selected. Afterwards", () => {
    addGame()
    cy.get("[data-testid=select-game-button]").click()
    refreshPage()
    cy.get("[data-testid=deselect-game-button]").click()
    refreshPage()
    cy.get("[data-testid=select-game-button]").should("exist")
  });
});
