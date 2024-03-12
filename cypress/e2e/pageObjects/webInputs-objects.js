class WebInputPage {

    enterInputNumber() {
        return cy.get('#input-number')
    }

    enterInputText() {
        return cy.get('#input-text')
    }

    enterInputPassword() {
        return cy.get('#input-password')
    }

    displayInputButton() {
        return cy.get('#btn-display-inputs')
    }
    displayOutputNumber() {
        return cy.get('#output-number')
    }

    displayOutputText() {
        return cy.get('#output-text')
    }

    displayOutputPassword() {
        return cy.get('#output-password')
    }


} export default WebInputPage