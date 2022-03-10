/// <reference types="cypress" />
import signin from '../../pages/SigninPage'
import salesmanFactory from '../../factories/SalesmanFactory'

describe('TV - SignIn Page Salesman', () => {
    beforeEach(() => {
        cy.visit('/tv')
      })

    it('Login', () => {
        cy.get('.adminNotLogged .form_login_venda input#username').type('credito_qa')
        cy.get('.adminNotLogged .form_login_venda input#login').type('Qa#automacao2020')
        cy.get('.adminNotLogged .form_login_venda button[type="submit"]').click()
        cy.get('div.btn_box a[href*="/create"]').should('have.text', 'Cadastrar Cliente')
        cy.get('.box_msg_welcome .msg_welcome').should('contain', 'Tester')
    });

    it('Password incorret', () => {
        // cy.get('.adminNotLogged .form_login_venda input#username').type('credito_qa')
        // cy.get('.adminNotLogged .form_login_venda input#login').type('teste123')
        cy.get('.adminNotLogged .form_login_venda button[type="submit"]').click()
        cy.get('.error_full .error_box #errorLogin').should('have.text', 'O login da conta esta incorreto ou sua conta foi desativada temporariamente. Aguarde e tente novamente mais tarde.')
    });

    it('Required Fields', () => {
        cy.get('.adminNotLogged .form_login_venda button[type="submit"]').click()
        cy.get('.error_full .error_box #errorLogin').should('have.text', 'O login da conta esta incorreto ou sua conta foi desativada temporariamente. Aguarde e tente novamente mais tarde.')
    });
})