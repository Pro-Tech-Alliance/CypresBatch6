class FormValidationPage{


InputContactName(){
    return cy.get('[name="ContactName"]')
}

InputContactNumber(){
    return cy.get('[name="contactnumber"]')
}

InputPickUpDate(){
    return cy.get('[name="pickupdate"]')
}

SelectPaymentMethod() {
  return  cy.get('[name="payment"]')
}

RegisterButton(){
    return cy.get('button.btn.btn-primary')
}

}export default FormValidationPage