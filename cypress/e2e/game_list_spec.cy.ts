import { has } from "cypress/types/lodash";

describe("Tests GameList functions", () => {
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

  it("Adds a game", () => {
    hasNoRows()
    addGame()
    hasRows(1)
  });
  
  it("Adds a game, then verifies that there's a deletion button", () => {
    hasNoRows()
    addGame()
    hasRows(1)
    cy.get("[data-testid=delete-game-button]").should("exist")
  })
  
  it("Adds two games", () => {
    hasNoRows()
    addGame()
    addGame()
    hasRows(2)
  });

  it("Deletes a game", () => {
    hasNoRows()
    addGame()
    hasRows(1)
    deleteGame()
    hasRows(0)
  });

  it("Deletes two games", () => {
    hasNoRows()
    addGame()
    addGame()
    hasRows(2)
    deleteGame()
    hasRows(1)
    deleteGame()
    hasRows(0)
  })

  it("Adds a game, deletes it, then adds another", () => {
    hasNoRows()
    addGame()
    hasRows(1)
    deleteGame()
    hasRows(0)
    addGame()
    hasRows(1)
  })

  it("Adds a game, deletes it, then verifies that there's no deletion button", () => {
    hasNoRows()
    addGame()
    hasRows(1)
    deleteGame()
    hasRows(0)
    cy.get("[data-testid=delete-game-button]").should("not.exist")
  })
});
