describe("Tests selecting games from the GameList", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const addGame = () => {
    cy.get("[data-testid=add-game-button]").click();
  }

  const hasNoRows = () => {
    cy.get("[data-testid=no-games-list-item]").should("exist")
  }

  const hasRows = (numberRows: number) => {
    cy.get("[data-testid=games-list-item]").should("have.length", numberRows);
  }

  const deleteGame = () => {
    cy.get("[data-testid=delete-game-button]").eq(0).click();
  }

  it("See's no games on initial load", () => {
    hasNoRows()
  });
  
  it("Adds a game sees the selection button", () => {
    hasNoRows()
    addGame()
    hasRows(1)
  });

  it("Adds a game and selects it", () => {
    hasNoRows()
    addGame()
    hasRows(1)
  });
});
