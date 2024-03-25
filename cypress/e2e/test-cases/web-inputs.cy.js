/// <reference types="cypress" />
import WebInputPage from "../pageObjects/webInputs-objects"
import GeneralPage from "../pageObjects/generalObjects"

const webinputs = new WebInputPage();
const generalPage = new GeneralPage()

describe('Validating Web Inputs', () => {
    beforeEach(() => {
        cy.visit('https://practice.expandtesting.com/inputs')

    })

    it('Negative Testing User input', () => {

        generalPage.verifyPageTitle_is('Web inputs')
        generalPage.verifyPageHeading_is('Web inputs')


        //Users input
        webinputs.enterInputNumber().type("1234567890abcdefghiujgfhrt")
        webinputs.enterInputText().type("KTYDSTCTYCT56724567*^%$^")
        webinputs.enterInputPassword().type('123#ABC.y')

        webinputs.displayInputButton().click()

        //Display output
        webinputs.displayOutputNumber().should('contain.text', '1234567890')
        webinputs.displayOutputText().should('contain.text', 'KTYDSTCTYCT56724567*^%$^')
        webinputs.displayOutputPassword().should('contain.text', '123#ABC.y')

      


    })




    it('Positive Testing User Input', () => {


        generalPage.verifyPageTitle_is('Web inputs')
        generalPage.verifyPageHeading_is('Web inputs')

        //Users input
        webinputs.enterInputNumber().type("12345")
        webinputs.enterInputText().type('Pro-Tech Alliance Batch#6')
        //123#ABC.y
        webinputs.enterInputPassword().type('HelloPeople12$5')

        generalPage.displayInputButton().click()


        //Display output
        webinputs.displayOutputNumber().should('contain.text', '12345')
        webinputs.displayOutputText().should('contain.text', 'Pro-Tech Alliance Batch#6')
        webinputs.displayOutputPassword().should('contain.text', 'HelloPeople12$5')


        //****REFACTORING CODE TO USE POM

        //User input
        webinputs.enterInputNumber().type("12345")
        webinputs.enterInputText().type('Pro-Tech Alliance Batch#6')
        //password
        webinputs.enterInputNumber().type('HelloPeople12$5')

        webinputs.displayInputButton().click


        //Display Output
        webinputs.displayOutputNumber().should('contain.text', '12345')
        webinputs.displayOutputText().should('contain.text', 'Pro-Tech Alliance Batch#6')
        webinputs.displayOutputPassword().should('contain.text', 'HelloPeople12$5')



    })


    it('Clear Users input', () => {
        cy.get('#input-number').type("12345")
        cy.get('#input-text').type('Pro-Tech Alliance Batch#6')
        cy.get('#input-password').type('HelloPeople12$5')
        cy.get('#btn-clear-inputs').click()

        //checking all inouts are cleared
        cy.get('#input-number').should('be.empty')
        cy.get('#input-text').should('be.empty')
        cy.get('#input-password').should('be.empty')


        //****REFACTORING CODE TO USE POM

        //User input
        webinputs.enterInputNumber().type("12345")
        webinputs.enterInputText().type('Pro-Tech Alliance Batch#6')
        webinputs.enterInputPassword().type('HelloPeople12$5')
        webinputs.clearInputButton().click()

        //checking all inouts are cleared
        webinputs.enterInputNumber().should('be.empty')
        webinputs.enterInputText().should('be.empty')
        webinputs.enterInputPassword().should('be.empty')


    
    })

    it('Clearing users output with input', () => {
        cy.get('#input-number').type("12345")
        cy.get('#input-text').type('Pro-Tech Alliance Batch#6')
        cy.get('#input-password').type('HelloPeople12$5')



        cy.get('#btn-display-inputs').click()//display button
        cy.get('#output-text').should('be.visible')

        cy.get('#btn-clear-inputs').click()//clear button
        cy.wait(2000)
        cy.get('#output-text').should('not.be.visible')
        cy.get('#input-number').should('be.empty')
        cy.get('#input-text').should('be.empty')
        cy.get('#input-password').should('be.empty')


        //****REFACTORING CODE TO USE POM

        //User input
        webinputs.enterInputNumber().type("12345")
        webinputs.enterInputText().type('Pro-Tech Alliance Batch#6')
        webinputs.enterInputPassword().type('HelloPeople12$5')


        webinputs.displayInputButton().click//display button
        webinputs.displayOutputText().should('be.visible')

        webinputs.clearInputButton().click()//clear button
        cy.wait(2000)
        webinputs.displayOutputText().should('not.be.visible')
        webinputs.enterInputNumber().should('be.empty')
        webinputs.enterInputText().should('be.empty')
        webinputs.enterInputPassword().should('be.empty')







    })




})