/// <reference types="cypress" />

const error = {
  invalidPassword: "password",
  invalidEmail: "email_invalid"
}

import login from '../support/pages/login/index'

describe('Login', () => {

  beforeEach(() => login.accessLogin())

  it.only('Login with email successfully', () => {
    login.authenticationWithEmail()
    login.validUserLogged()
    cy.clearLocalStorage()
  })

  it('Login with CNPJ successfully', () => {
    login.authenticationWithCnpj()
    login.validUserLogged()
    cy.clearLocalStorage()
  })

  it('Login with CPF successfully', () => {
    login.authenticationWithCpf()
    login.validUserLogged()
    cy.clearLocalStorage()
  })

  it('Login with invalid email', () => {
    login.authenticationInvalidEmail()
    login.validateErrorAuthentication(error.invalidEmail)
  })

  it('Login with invalid Taxvat', () => {
    login.authenticationInvalidTaxvat()
    login.validateErrorAuthentication(error.invalidPassword)
  })

  it('login with incorrect password', () => {
    login.authenticationInvalidPassword()
    login.validateErrorAuthentication(error.invalidPassword)
  })
})