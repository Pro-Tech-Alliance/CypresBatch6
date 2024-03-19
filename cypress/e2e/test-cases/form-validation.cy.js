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


it('Negative Test From Valiudation',()=>{


})





})





