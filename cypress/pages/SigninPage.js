const el = require('./elements/elements').ELEMENTS
class SigninPage {

  accessLogin(){
    cy.visit('/customer/account/login')
  }

  waitRequest(){
    cy.intercept(' /customer/section/**').as('login')
    cy.wait('@login')
  }

  authentication(customer){
    cy.get(el.signin.username).type(customer.password)
    cy.get(el.signin.password).type(customer.username)
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

  requiredFieldShouldBe(message){
    cy.contains('.mage-error', message).should('be.visible')
  }
}

export default new SigninPage()