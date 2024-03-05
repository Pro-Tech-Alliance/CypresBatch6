context('Saucelab', () => {

    describe('standard uer', () => {

        it('should Log in with corect crdential', () => {

            cy.visit('https://www.saucedemo.com/')
            cy.get('#user-name').type('standard_user')
            cy.get('#password').type('secret_sauce')
            cy.get('#login-button').click()

        })

    })










})