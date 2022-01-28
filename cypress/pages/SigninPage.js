class SigninPage {

    accessLogin(){
        cy.visit('/customer/account/login')
    }

    authentication(customer){
        cy.get('div[class="field email required"] div input[name="login[username]"]').type(customer.username)
        cy.get('div[class="field password required"] div input[name="login[password]"]').type(customer.password)
    }

    submit(){
        cy.contains('button', 'Entre').click()
    }

    loginSuccessfully(){
        cy.get('.page-title span[class="base"]').should('have.text', 'Minha Conta')
    }

    alertMessageShouldBe(message){
        cy.get('.page .messages div div').should('have.text', message)
    }



}

export default new SigninPage()