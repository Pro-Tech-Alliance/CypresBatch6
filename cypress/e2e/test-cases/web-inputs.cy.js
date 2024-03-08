/// <reference types="cypress" />

describe('Validating Web Inputs', () => {
    beforeEach(() => {
        cy.visit('https://practice.expandtesting.com/inputs')
        
    })

    it('Negative Testing User input', () => {

       
        cy.title().should('contain', 'Web inputs')
        cy.get('h1').should('contain.text', 'Web inputs')

        //Users input
        cy.get('#input-number').type("1234567890abcdefghiujgfhrt")
        cy.get('#input-text').type('KTYDSTCTYCT56724567*^%$^')
        //123#ABC.y
        cy.get('#input-password').type('123#ABC.y')

        cy.get('#btn-display-inputs').click()

        //Display output
        cy.get('#output-number').should('contain.text', '1234567890')
        cy.get('#output-text').should('contain.text', 'KTYDSTCTYCT56724567*^%$^')
        cy.get('#output-password').should('contain.text', '123#ABC.y')


    })




it('Positive Testing User Input',()=>{

    cy.title().should('contain', 'Web inputs')
    cy.get('h1').should('contain.text', 'Web inputs')

    //Users input
    cy.get('#input-number').type("12345")
    cy.get('#input-text').type('Pro-Tech Alliance Batch#6')
    //123#ABC.y
    cy.get('#input-password').type('HelloPeople12$5')

    cy.get('#btn-display-inputs').click()

    //Display output
    cy.get('#output-number').should('contain.text', '12345')
    cy.get('#output-text').should('contain.text', 'Pro-Tech Alliance Batch#6')
    cy.get('#output-password').should('contain.text', 'HelloPeople12$5')

})


it('Clear Users input',()=>{



})




})