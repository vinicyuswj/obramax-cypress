const faker = require('faker-br')


const customer = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  cpf: faker.br.cpf(),
  email: faker.name.firstName()+'test123@mailinator.com',
  companyName: faker.name.lastName(),
  stateInscription: '196357582450',
  cnpj: faker.br.cnpj(),
  telefone: '11965555511',
  password: '4ut0m4c4aoCYPRESS'
}

const customerExist = {
  email_pf: 'qa@creditoonline.com.br',
  email_pj: 'qa@contapj.com.br',
  cnpj: '47253900000104',
  cpf: '67251817837',
  cpf_1: faker.br.cpf(),
  cnpj_1: faker.br.cnpj()
}

Cypress.Commands.add('accessForm', () => {
  cy.visit('/customer/account/create/')
})

Cypress.Commands.add('submitForm', () => {
  cy.get('#submit-taxvat').click()
})

Cypress.Commands.add('standardFormFields', () => {
  cy.get('input#firstname').type(customer.firstName)
  cy.get('input#lastname').type(customer.lastName)
  cy.get('input#sms_phone').type(customer.telefone)
  cy.get('input#password').type(customer.password)
  cy.get('input#password-confirmation').type(customer.password)
})

Cypress.Commands.add('fillFormCustomer', (type) => {
  if(type === 'pf'){
    // cy.standardFormFields();
    cy.get('input#email_address').type(customer.email)
    cy.get('select#legal_type').select('1')
    cy.get('select#customer_type').select('1')
    cy.get('input#taxvat').type(customer.cpf)
  }else{
    cy.get('input#email_address').type(customer.email)
    cy.get('select#legal_type').select('2')
    cy.get('select#customer_type').select('1')
    cy.get('input#state_inscription').type(customer.stateInscription)
    cy.get('input#taxvat').type(customer.cnpj)
    cy.get('input#company_name').type(customer.companyName)
  }
})

Cypress.Commands.add('successfulCreation', () => {
  cy.get('.message-success > div').should('have.text', 'Obrigado por registrar-se com Obramax.')
  cy.get('.message-success > div').should('be.visible')
  cy.get('.block-dashboard-info > .block-title > strong').should('have.text', 'Informações da Conta')
  cy.get('.block-dashboard-info > .block-title > strong').should('be.visible')
})

Cypress.Commands.add('validateExistEmail', (type) => {
  if(type == 'pf'){
    cy.get('#email_address').clear()
    cy.get('#taxvat').clear()
    cy.get('#email_address').type(customerExist.email_pf)
    cy.get('#taxvat').type(customerExist.cpf_1)
    cy.submitForm() // abrir tarefa
    cy.get('.message-error > div').should('have.text', 'Já existe uma conta com este endereço de e-mail. Se você tem certeza que é o seu endereço de e-mail,  clique aqui para obter sua senha e acessar a sua conta.')
    cy.get('.message-error > div').should('be.visible')
  } else{
    cy.get('#email_address').clear()
    cy.get('#taxvat').clear()
    cy.get('#email_address').type(customerExist.email_pj)
    cy.get('#taxvat').type(customerExist.cnpj_1)
    cy.submitForm()
    cy.submitForm() // abrir tarefa
    cy.get('.message-error > div').should('have.text', 'Já existe uma conta com este endereço de e-mail. Se você tem certeza que é o seu endereço de e-mail,  clique aqui para obter sua senha e acessar a sua conta.')
    cy.get('.message-error > div').should('be.visible')
  }
})

Cypress.Commands.add('validateExistTaxvat', (taxvat) => {
  if(taxvat == 'pf'){
    cy.get('#taxvat').clear()
    cy.get('#taxvat').type(customerExist.cpf)
    cy.submitForm()
    cy.get('.message-error > div').should('have.text', 'Este CPF/CNPJ já foi usado em outro cadastro desta loja!')
    cy.get('.message-error > div').should('be.visible')
  }else{
    cy.get('#taxvat').type(customerExist.cnpj)
    cy.submitForm()
    cy.submitForm()
    cy.get('.message-error > div').should('have.text', 'Este CPF/CNPJ já foi usado em outro cadastro desta loja!')
    cy.get('.message-error > div').should('be.visible')
  }
})