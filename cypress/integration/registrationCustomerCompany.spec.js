/// <reference types="cypress" />

import customer from '../support/pages/form/index'


describe('Registration Customer Company', () => {
  beforeEach(() => customer.acessForm())

  it('Validate existing taxvat', () => {
    customer.submitExistingTaxvatCompany()
    customer.validateExistingTaxvat()
  })

  it('Validate existing e-mail', () => {
    customer.submitExistingEmailCompany()
    customer.validateExistingEmail()
  })

  it.only('Create Customer Company', () => {
    customer.createCompany()
    customer.validateCreation()
    cy.clearCookies()
  })
})