
describe("Tests what characters look like by default", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-testid=add-game-button]").click();
    cy.get("[data-testid=select-game-button]").click()
    cy.get("[data-testid=system-selection-list]").eq(0).click("left")
    cy.get("[data-testid=save-system-selection-button]").click()
  });

  it("Selects a system and sees the system name", () => {
    cy.contains("Ironsworn")
  });

  it("Selects a system and sees the basic character sheet", () => {
    cy.get("[data-testid=character-sheet]").should("exist")
  })
  
  it("Selects a system and sees the to-do list", () => {
    cy.get("[data-testid=get-started-warning]").should("exist")
  })
  
  it("Should see that Name is blank, and that the Name warning exists", () => {
    cy.get('[data-testid=character-sheet-name]').should("have.value", "")
    cy.get("[data-testid=no-name-warning]").should("exist")
  })
});