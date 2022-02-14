/// <reference types="cypress" />

import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('SignUp Page Customer', () => {

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    signup.acessForm()
  })

  it('Validate existing document', () => {
    var customer = signupFactory.customer()
    customer.cpf = '67251817837'

    signup.fillFormCustomer(customer)
    signup.submit()
    signup.alertMessageShouldBe('Este CPF/CNPJ já foi usado em outro cadastro desta loja!')
  })

  it('Validate existing e-mail', () => {
    var customer = signupFactory.customer()
    customer.email = 'qa@creditoonline.com.br'

    signup.fillFormCustomer(customer)
    signup.submit()
    signup.alertMessageShouldBe('Já existe uma conta com este endereço de e-mail. Se você tem certeza que é o seu endereço de e-mail,  clique aqui para obter sua senha e acessar a sua conta.')
  })

  it('Incorrect document', () => {
    var customer = signupFactory.customer()
    customer.cpf = 'AAAx481255@AAAAAAA'

    signup.fillFormCustomer(customer)
    signup.submit()
    signup.alertInvalidRequiredField('O CPF/CNPJ informado não é um CPF/CNPJ válido.')

  })

  it('Incorrect email', () => {
    var customer = signupFactory.customer()
    customer.email = 'obramax.com.br'

    signup.fillFormCustomer(customer)
    signup.submit()
    signup.alertInvalidRequiredField('Por favor, insira um email válido (Ex: joaoninguem@dominio.com.br).')
  })

  it('Validate existing taxvat', () => {
    var customer = signupFactory.customer()
    customer.cnpj = '47253900000104'

    signup.fillFormCustomerCompany(customer)
    signup.submit()
    signup.alertMessageShouldBe('Este CPF/CNPJ já foi usado em outro cadastro desta loja!')
  })

  it('Require Fields', () => {
    var customer = signupFactory.customer()
    customer.email = '  '
    customer.cpf = '   '
    customer.password = 'xxx'

    signup.fillFormCustomer(customer)
    signup.submit()
    signup.submit()
    signup.alertInvalidRequiredField('Este campo é obrigatório.')
    signup.alertInvalidRequiredField('O CPF/CNPJ informado não é um CPF/CNPJ válido.')
    signup.alertInvalidRequiredField('Este campo deve conter 8 ou mais caracteres. Espaços serão ignorados.')
  })

  it('SignUp Customer Company', () => {
    var customer = signupFactory.customer()

    signup.fillFormCustomerCompany(customer)
    signup.submit()
    signup.alertMessageShouldBe('Obrigado por registrar-se com Obramax.')
  })

  it('SignUp Customer', () => {
    var customer = signupFactory.customer()

    signup.fillFormCustomer(customer)
    signup.submit()
    signup.alertMessageShouldBe('Obrigado por registrar-se com Obramax.')
  })
})
