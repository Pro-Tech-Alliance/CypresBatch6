/// <reference types="cypress" />
import WebInputPage from "../pageObjects/webInputs-objects"
import GeneralPage from "../pageObjects/generalObjects"
import { number } from "assert-plus";

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
         //Users input
         webinputs.enterInputNumber().type("12345")
         webinputs.enterInputText().type('Pro-Tech Alliance Batch#6')
         //123#ABC.y
         webinputs.enterInputPassword().type('HelloPeople12$5')
 
         webinputs.displayInputButton().click()
 
         //Display output
         webinputs.displayOutputNumber().should('contain.text', '12345')
         webinputs.displayOutputText().should('contain.text', 'Pro-Tech Alliance Batch#6')
         webinputs.displayOutputPassword().should('contain.text', 'HelloPeople12$5')
        //cy.get().invoke('text').as('datetext')
     })
     describe('Date Format Verification', () => {
        it('Verifies the date format on the page', () => {
            webinputs.enterInputNumber().type("12345")
            webinputs.enterInputText().type('Pro-Tech Alliance Batch#6')
            //123#ABC.y
            webinputs.enterInputPassword().type('HelloPeople12$5')
            cy.get('#input-date').type('2024-03-14')
            webinputs.displayInputButton().click()
    
            //Display output
            webinputs.displayOutputNumber().should('contain.text', '12345')
            webinputs.displayOutputText().should('contain.text', 'Pro-Tech Alliance Batch#6')
            webinputs.displayOutputPassword().should('contain.text', 'HelloPeople12$5')
          cy.get('#output-date').invoke('text').as('dateText');
      
          cy.get('@dateText').should('match', /\d{4}-\d{2}-\d{2}/);
        });
      });
 
     it('Clear Users input', () => {
         webinputs.enterInputNumber().type("12345")
         webinputs.enterInputText().type('Pro-Tech Alliance Batch#6')
         webinputs.enterInputPassword().type('HelloPeople12$5')
         generalPage.displayClearInputsButton().click()
 
         //checking all inouts are cleared
         webinputs.enterInputNumber().should('be.empty')
         webinputs.enterInputText().should('be.empty')
         webinputs.enterInputPassword().should('be.empty')
 
     })
 
     it('Clearing users output with input', () => {
         webinputs.enterInputNumber().type("12345")
         webinputs.enterInputText().type('Pro-Tech Alliance Batch#6')
         webinputs.enterInputPassword().type('HelloPeople12$5')
 
         webinputs.displayInputButton().click()//display button
         webinputs.displayOutputText().should('be.visible')
 
         generalPage.displayClearInputsButton().click()//clear button
         cy.wait(2000)
         webinputs.displayOutputText().should("not.exist");
         webinputs.enterInputNumber().should('be.empty')
         webinputs.enterInputText().should('be.empty')
         webinputs.enterInputPassword().should('be.empty')
        
 
 
 
     })
 
 
 
 
 })