/// <reference types="cypress" />

import customer from '../support/pages/form/index'

describe('Registration Customer', () => {

  beforeEach(() => customer.acessForm())

  it('Create Customer', () => {
    customer.createCustomer()
    customer.validateCreation()
    cy.clearCookies()
  })

  it('Validate existing taxvat', () => {
    customer.submitExistingTaxvat()
    customer.validateExistingTaxvat()
  })

  it.only('Validate existing e-mail', () => {
    customer.submitExistingEmail()
    customer.validateExistingEmail()
  })
})