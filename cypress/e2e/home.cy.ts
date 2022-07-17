/// <reference types="cypress" />
describe("My Portfolio Website", () => {
  const port = 3000;
  const baseUrl = `http://localhost:${port}`;
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("changes the theme", () => {
    cy.get("h1").should("contain.text", "Aidan Tomcy");
    cy.get("button#dark-light-toggle")
      .should("contain.text", "Let there be light")
      .click();
    cy.get("body").should("have.class", "light");
    cy.get("button#dark-light-toggle")
      .should("contain.text", "Let there be darkness")
      .click();
    cy.get("body").should("have.class", "dark");
  });
});
