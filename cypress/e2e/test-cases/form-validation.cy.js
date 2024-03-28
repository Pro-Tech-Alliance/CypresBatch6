/// <reference types="cypress" />

import FormValidationPage from "../pageObjects/form-validationObjects";
import GeneralPage from "../pageObjects/generalObjects";
import myData from "../../fixtures/testData.json"
const testData = require('../../fixtures/testData.json')
const formValidation = new FormValidationPage()
const generalPage = new GeneralPage()

describe('Validating Web Inputs', () => {
    beforeEach(() => {
    
        cy.visit('https://practice.expandtesting.com/form-validation')

    })



    it('Positf Test Form Validation', () => {

        generalPage.verifyPageHeading_is('Form Validation')
        formValidation.InputContactName()
            .clear()
            .type(myData.testName)

        formValidation.InputContactNumber().type(myData.testContactNumber)
        formValidation.InputPickUpDate().type(myData.testDate)
        formValidation.SelectPaymentMethod().select(myData.selectPaymentMethod)
        formValidation.RegisterButton().click()

        generalPage.verifyPageHeading_is('Form Confirmation')
        cy.get('alert').should('contain.text', 'Thank you for validating your ticket')

    })


    it('Negative Test From Valiudation', () => {


    })





})





