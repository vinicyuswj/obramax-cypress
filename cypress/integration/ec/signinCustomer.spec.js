/// <reference types="cypress" />
import signin from '../../pages/SigninPage'
import signinFactory from '../../factories/SigninFactory'

describe('EC - SignIn Page Customer', () => {

  beforeEach(() => {
    signin.accessLogin()
  })

  afterEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  });

  it('Login with email', () => {
    var customer = signinFactory.customer()

    signin.authentication(customer)
    signin.submit()
    signin.waitRequest()
    signin.loginSuccessfully()
    signin.usernameLoggedShouldBeVisible('Olá, Usuário!')
  })

  it('Login with CPF', () => {
    var customer = signinFactory.customer()
    customer.username = '67251817837'

    signin.authentication(customer)
    signin.submit()
    signin.waitRequest()
    signin.loginSuccessfully()
    signin.usernameLoggedShouldBeVisible('Olá, Usuário!')
  })

  it('Login with CNPJ', () => {
    var customer = signinFactory.customer()
    customer.username = '97812369000130'

    // signin.waitRequest()
    signin.authentication(customer)
    signin.submit()
    signin.waitRequest()
    signin.loginSuccessfully()
    // signin.usernameLoggedShouldBeVisible('Olá, Usuário!')
  })

  it('Login with incorrect email', () => {
    var customer = signinFactory.customer()
    customer.username = 'obramax@teste.com'

    // signin.waitRequest()
    signin.authentication(customer)
    signin.submit()
    signin.alertMessageShouldBe('O login da conta esta incorreto ou sua conta foi desativada temporariamente. Aguarde e tente novamente mais tarde.')
  })

  it('Login with incorrect password', () => {
    var customer = signinFactory.customer()
    customer.password = 'xxxxxxxxxx222'

    // signin.waitRequest()
    signin.authentication(customer)
    signin.submit()
    signin.waitRequest()
    signin.alertMessageShouldBe('O login da conta esta incorreto ou sua conta foi desativada temporariamente. Aguarde e tente novamente mais tarde.')
  })

  it('Login with required fields empty', () => {
    var customer = signinFactory.customer()
    customer.password = ' '
    customer.username = ' '

    // signin.waitRequest()
    signin.authentication(customer)
    signin.submit()
    signin.requiredFieldShouldBe('Este campo é obrigatório.')
  })
})