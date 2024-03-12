class GeneralPage {
  verifyPageTitle_is(value) {
    cy.title().should("contain", value);
  }

  verifyPageHeading_is(value) {
    cy.get("h1").should("contain.text", value);
  }
  displayClearInputButton() {
    return cy.get("#btn-clear-inputs");
  }
}
export default GeneralPage;
