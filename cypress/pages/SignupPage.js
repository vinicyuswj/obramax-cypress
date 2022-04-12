class SignupPage {

  acessForm(){
    cy.visit('/customer/account/create')
  }

  fillFormCustomer(customer){
    cy.get('input#taxvat').type(customer.cpf)
    cy.get('select#legal_type').select('1')
    cy.get('input#email_address').type(customer.email)
    cy.get('input#firstname').type(customer.firstName)
    cy.get('input#lastname').type(customer.lastName)
    cy.get('input[id="sms_phone"][name="sms_phone"]').type(customer.phone)
    cy.get('input#password').type(customer.password)
    cy.get('input#password-confirmation').type(customer.password)
    cy.get('select#legal_type').select('1')

  }

  fillFormCustomerCompany(customer){
    cy.get('input#taxvat').type(customer.cnpj)
    cy.get('select#legal_type').select('2')
    cy.get('input#firstname').type(customer.firstName)
    cy.get('input#company_name').type(customer.companyName)
    cy.get('input#lastname').type(customer.lastName)
    cy.get('input[id="sms_phone"][name="sms_phone"]').type(customer.phone)
    cy.get('input#password').type(customer.password)
    cy.get('input#password-confirmation').type(customer.password)
    cy.get('input#email_address').type(customer.email)
    cy.get('div[class="control"] input#state_inscription').type('099225700023')
  }

  submit(){
    cy.contains('button', 'Criar conta').click()
  }

  alertMessageShouldBe(message){
    cy.get('.page-wrapper').should('contain', message)
  }

  alertInvalidRequiredField(message){
    cy.contains('.mage-error', message).should('be.visible')
  }

}

export default new SignupPage()