describe("Tests selecting game systems from the system selection list", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-testid=add-game-button]").click();
    cy.get("[data-testid=select-game-button]").click()
    cy.contains("Game Selected")
  });

  const noSystemWarning = () => {
    cy.get("[data-testid=no-system-warning]").should("exist")
  }

  const selectFirstSystem = () => {
    cy.get("[data-testid=system-selection-list]").eq(0).click("left")
    cy.get("[data-testid=save-system-selection-button]").click()
  }

  const deselectGame = () => {
    cy.get("[data-testid=deselect-game-button]").click()
  }

  it("Selects a game and sees the initial dashboard", () => {
    cy.contains("Game Selected")
  })
  
  it("Sees the 'No System Selected' warning on first load", () => {
    noSystemWarning()
  })

  it("Sees the system selection list", () => {
    cy.get("[data-testid=system-selection-list-label]").should("exist")
  });
  
  it("Sees the system selection list and it should have children", () => {
    cy.get("[data-testid=system-selection-list]").children().should("exist")
  });
  
  it("Selects a system and no longer sees the system selection list", () => {
    noSystemWarning()
    selectFirstSystem()
    cy.get("[data-testid=system-selection-list]").should("not.exist")
  })
  
  it("Selects a system, deselects the game, and sees only one game in the list", () => {
    noSystemWarning()
    selectFirstSystem()
    deselectGame()
    cy.get("[data-testid=games-list-item]").should("have.length", 1);
  })
  
  it("Selects a system, deselects the game, and see's the selected system in the game list", () => {
    noSystemWarning()
    selectFirstSystem()
    deselectGame()
    cy.contains("Radiant")
  })

  it("Selects a system and no longer sees the 'No System Selected' warning", () => {
    noSystemWarning()
    selectFirstSystem()
    cy.get("[data-testid=no-system-warning]").should("not.exist")
  })
  
  it("Refreshes the page and still sees the no system warning and system selection list", () => {
    noSystemWarning()
    cy.reload()
    noSystemWarning()
  })
});
