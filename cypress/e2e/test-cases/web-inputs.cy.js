
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

        
        webinputs.displayClearButton().click()
        // clear user's input 
        webinputs.enterInputNumber().should('be.empty')
        webinputs.enterInputText().should('be.empty')
        webinputs.enterInputPassword().should('be.empty')
        // clear output's input 
        webinputs.displayOutputText.should('not.display')


        //Users input
        webinputs.enterInputNumber().should("12345")
        webinputs.enterInputText().should('Pro-Tech Alliance Batch#6')
        webinputs.displayOutputPassword().should('HelloPeople12$5')

        webinputs.displayInputButton().click()
        //Display output
        webinputs.displayOutputNumber().should('contain.text', '12345')
        webinputs.displayOutputText().should('contain.text', 'Pro-Tech Alliance Batch#6')
        webinputs.displayOutputPassword().should('contain.text', 'HelloPeople12$5')

    })

    it('Clearing users output with input', () => {


        webinputs.displayClearButton().click()
        cy.wait(2000)
        // clear output's input 
        webinputs.displayOutputText.should('not.display')

        // clear output's input 
        webinputs.enterInputNumber().should('be.empty')
        webinputs.enterInputText().should('be.empty')
        webinputs.enterInputPassword().should('be.empty')

    })
})


