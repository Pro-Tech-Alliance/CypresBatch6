/// <reference types="cypress" />

import FormValidationPage from "../pageObjects/form-validationObjects";
import GeneralPage from "../pageObjects/generalObjects";
const formValidation = new FormValidationPage()
const generalPage = new GeneralPage()

describe('Validating Web Inputs', () => {
    beforeEach(() => {
        cy.visit('https://practice.expandtesting.com/form-validation')

    })



it('Positf Test Form Validation', ()=>{

    generalPage.verifyPageHeading_is('Form Validation')
    formValidation.InputContactName()
    .clear()
    .type('Pro-Tech Alliance')

    formValidation.InputContactNumber().type('469-6942728')
    formValidation.InputPickUpDate().type('01012024')
    formValidation.SelectPaymentMethod().select('card')
    formValidation.RegisterButton().click()

    generalPage.verifyPageHeading_is('Form Confirmation')
    cy.get('alert').should('contain.text','Thank you for validating your ticket')

})


it('Negative Test Form Validation By Submitting Form without Filling out Mandatory fields',()=>{
    
    formValidation.InputContactName()
    .clear()
    .type('Pro-Tech Alliance')

    formValidation.RegisterButton().click()

    //Asserting the contact number invalid feedback message is displayed
    cy.get(':nth-child(2) > .invalid-feedback')
    .should('be.visible')
    .should('contain.text', 'Please provide your Contact number.')
    //Double verification by asserting the border color of the contact input field displays red
    cy.get('#validationCustom05').eq(0)
    .should('have.css', 'border-color' , 'rgb(220, 53, 69)')



    //Asserting Payment method invalid feedback message is displayed
    cy.get(':nth-child(4) > .invalid-feedback')
    .should('be.visible')
    .should('contain.text', 'Please select the Paymeny Method.')
     //Double verification by asserting the border color of the payment input field displays red
    cy.get('#validationCustom04')
    .should('have.css', 'border-color' , 'rgb(220, 53, 69)')


    //Asserting Date Method invalid feedback message is displayed
    cy.get(':nth-child(3) > .invalid-feedback')
    .should('be.visible')
    .should('contain.text', 'Please provide valid Date.')
     //Double verification by asserting the border color of the date input field displays red
     cy.get(':nth-child(3) > #validationCustom05')
     .should('have.css', 'border-color' , 'rgb(220, 53, 69)')



})

it('Negative Test Form Validation By Submitting with all valid fields input but invalid contact number', () =>{
    
    formValidation.InputContactName()
    .clear()
    .type('Pro-Tech Alliance')
    formValidation.InputContactNumber().type('6942728')

    //Input with 13 as month value
    formValidation.InputPickUpDate().type('01-01-2024')
    formValidation.SelectPaymentMethod().select('card')
    formValidation.RegisterButton().click()

      //Asserting the contact number invalid feedback message is displayed
      cy.get(':nth-child(2) > .invalid-feedback')
      .should('be.visible')
      .should('contain.text', 'Please provide your Contact number.')
      //Double verification by asserting the border color of the contact input field displays red
      cy.get('#validationCustom05').eq(0)
      .should('have.css', 'border-color' , 'rgb(220, 53, 69)')

    // cy.get('.alert > p')
    // .should('not.be.visible')

})
it('Negative Test Form Validation By Submitting with all valid fields input but contact name with is filled out with numbers and special characters', () =>{
    
    formValidation.InputContactName()
    .clear()
    .type('PrO12@')
    formValidation.InputContactNumber().type('469-6942728')

    //Input with 13 as month value
    formValidation.InputPickUpDate().type('01-01-2024')
    formValidation.SelectPaymentMethod().select('card')
    formValidation.RegisterButton().click()

    

     cy.get('.alert > p')
     .should('not.be.visible')

})





})





