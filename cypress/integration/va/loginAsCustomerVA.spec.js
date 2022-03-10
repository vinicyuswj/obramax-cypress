/// <reference types="cypress" />
import signin from '../../pages/SigninPage'
import salesmanFactory from '../../factories/SalesmanFactory'

describe('VA - Login as Customer', () => {
    beforeEach(() => {
        cy.visit('/va')
      })

    it.only('login and search user by document', () => {
        cy.get('.adminNotLogged .form_login_venda input#username').type('credito_qa')
        cy.get('.adminNotLogged .form_login_venda input#login').type('Qa#automacao2020')
        cy.get('.adminNotLogged .form_login_venda button[type="submit"]').click()
        cy.get('div.btn_box a[href*="/create"]').should('have.text', 'Cadastrar Cliente')
        cy.get('input#search-customer').type('67251817837')
        cy.contains('div#customer_search_autocomplete ul a', 'qa@creditoonline.com.br').click({force: true})
        cy.get('.columns .block-dashboard-orders div div strong').should('have.text', 'Últimos Pedidos')
    });

    it('login and search user by name', () => {
        cy.get('.adminNotLogged .form_login_venda input#username').type('credito_qa')
        cy.get('.adminNotLogged .form_login_venda input#login').type('Qa#automacao2020')
        cy.get('.adminNotLogged .form_login_venda button[type="submit"]').click()
        cy.get('div.btn_box a[href*="/create"]').should('have.text', 'Cadastrar Cliente')
        cy.get('input#search-customer').type('Usuario')
        cy.contains('div#customer_search_autocomplete ul a', 'qa@creditoonline.com.br').click({force: true})
        cy.get('.columns .block-dashboard-orders div div strong').should('have.text', 'Últimos Pedidos')
    });

    it('login and search user by e-mail', () => {
        cy.get('.adminNotLogged .form_login_venda input#username').type('credito_qa')
        cy.get('.adminNotLogged .form_login_venda input#login').type('Qa#automacao2020')
        cy.get('.adminNotLogged .form_login_venda button[type="submit"]').click()
        cy.get('div.btn_box a[href*="/create"]').should('have.text', 'Cadastrar Cliente')
        cy.get('input#search-customer').type('qa@creditoonline.com.br')
        cy.contains('div#customer_search_autocomplete', 'qa@creditoonline.com.br').click()
        cy.get('.columns .block-dashboard-orders div div strong').should('have.text', 'Últimos Pedidos')
    });

    it('Required Fields', () => {
        cy.wait(3000);
        cy.get('.adminNotLogged .form_login_venda button[type="submit"]').click()
        cy.get('.error_full .error_box #errorLogin').should('have.text', 'O login da conta esta incorreto ou sua conta foi desativada temporariamente. Aguarde e tente novamente mais tarde.')
    });
})