/// <reference types="cypress" />
import signin from '../pages/SigninPage'
import signinFactory from '../factories/SigninFactory'

describe('SignIn Page Customer', () => {

    beforeEach(() => {
        signin.accessLogin()
    });

    it('Login with email', () => {

        var customer = signinFactory.customer()

        signin.authentication(customer)
        signin.submit()
        signin.loginSuccessfully()
    });

    it('Login with CPF', () => {
        var customer = signinFactory.customer()
        customer.username = '67251817837'
        
        signin.authentication(customer)
        signin.submit()
        signin.loginSuccessfully()
    });

    it('Login with CNPJ', () => {
        var customer = signinFactory.customer()
        customer.username = '47253900000104'

        signin.authentication(customer)
        signin.submit()
        signin.loginSuccessfully()
    });

    it('Login with incorrect email', () => {
        var customer = signinFactory.customer()
        customer.username = 'obramax.com.br'

        signin.authentication(customer)
        signin.submit()
        
        cy.wait(2000)

        signin.alertMessageShouldBe('Um login e uma senha são necessários.')
    });

    it('Login with incorrect password', () => {
        var customer = signinFactory.customer()
        customer.password = 'xxxxxxxxxx222'

        signin.authentication(customer)
        signin.submit()
        cy.wait(2000)

        signin.alertMessageShouldBe('O login da conta esta incorreto ou sua conta foi desativada temporariamente. Aguarde e tente novamente mais tarde.')
    });

    it('Login with required fields empty', () => {
        var customer = signinFactory.customer()
        customer.password = '    '
        customer.username = '    '

        signin.authentication(customer)
        signin.submit()
        cy.wait(2000)
        signin.alertMessageShouldBe('Um login e uma senha são necessários.')
    });
});