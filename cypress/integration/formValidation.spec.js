/// <reference types="cypress" />

import customer from '../support/pages/form/index'

const fields = {
  email: 'email',
  taxvat: 'taxvat',
  password: 'password'
}

describe('Form Validation', () => {
  beforeEach(() => customer.acessForm())

  it('Invalid e-mail', () => {
    customer.invalidEmail()
    customer.validationRequiredFields(fields.email)
  })

  it.skip('Invalid CPF', () => {
    customer.invalidCpf()
    customer.validationRequiredFields(fields.taxvat)
  })

  it.skip('Invalid CNPJ', () => {
    customer.invalidCpnj()
    customer.validationRequiredFields(fields.taxvat)
  })

  it.skip('validate minimum password character', () => {
    customer.invalidPassword()
    customer.validationRequiredFields(fields.password)
  })
})