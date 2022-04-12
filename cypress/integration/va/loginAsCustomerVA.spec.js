/// <reference types="cypress" />
import signin from '../../pages/SigninPage'
import salesmanFactory from '../../factories/SalesmanFactory'

describe('VA - Login as Customer', () => {
    before(() => {
        // cy.clearCookies()
        // cy.clearLocalStorage()
        cy.visit('/va')
        cy.get('.adminNotLogged .form_login_venda input#username').type('credito_qa')
        cy.get('.adminNotLogged .form_login_venda input#login').type('Qa#automacao2020')
        cy.get('.adminNotLogged .form_login_venda button[type="submit"]').click()
        cy.wait(3000)
      })


    it('login and search user by document', () => {
        // cy.get('.adminNotLogged .form_login_venda input#username').type('credito_qa')
        // cy.get('.adminNotLogged .form_login_venda input#login').type('Qa#automacao2020')
        // cy.get('.adminNotLogged .form_login_venda button[type="submit"]').click()
        // cy.get('div.btn_box a[href*="/create"]').should('have.text', 'Cadastrar Cliente')
        cy.wait(3000)
        cy.get('form#search_customer .field .control input#search-customer').type('67251817837')
        cy.wait(3000)
        cy.contains('div#customer_search_autocomplete ul a', 'qa@creditoonline.com.br').click({force: true})
        cy.get('.columns .block-dashboard-orders div div strong').should('have.text', 'Últimos Pedidos')
    });

    it.only('login and search user by name', () => {
        // cy.get('.adminNotLogged .form_login_venda input#username').type('credito_qa')
        // cy.get('.adminNotLogged .form_login_venda input#login').type('Qa#automacao2020')
        // cy.get('.adminNotLogged .form_login_venda button[type="submit"]').click()
        // cy.get('div.btn_box a[href*="/create"]').should('have.text', 'Cadastrar Cliente')
        cy.wait(3000)
        cy.get('.control .busca_fechar').click({force: true})
        cy.wait(5000)
        cy.get('form#search_customer .field .control input#search-customer').type('Usuário Credito Online')
        cy.wait(3000)
        cy.contains('div#customer_search_autocomplete ul a', 'qa@creditoonline.com.br').click({force: true})
        cy.wait(3000)
        cy.get('.columns .block-dashboard-orders div div strong').should('have.text', 'Últimos Pedidos')
    });

    it('login and search user by e-mail', () => {
        // cy.get('.adminNotLogged .form_login_venda input#username').type('credito_qa')
        // cy.get('.adminNotLogged .form_login_venda input#login').type('Qa#automacao2020')
        // cy.get('.adminNotLogged .form_login_venda button[type="submit"]').click()
        // cy.get('div.btn_box a[href*="/create"]').should('have.text', 'Cadastrar Cliente')
        cy.wait(3000);
        cy.get('.control .busca_fechar').click({force: true})
        cy.get('form#search_customer .field .control input#search-customer').type('qa@creditoonline.com.br')
        cy.wait(3000)
        cy.contains('div#customer_search_autocomplete', 'qa@creditoonline.com.br').click()
        cy.get('.columns .block-dashboard-orders div div strong').should('have.text', 'Últimos Pedidos')
    });

    it.skip('Required Fields', () => {
        cy.wait(3000);
        cy.get('.adminNotLogged .form_login_venda button[type="submit"]').click()
        cy.get('.error_full .error_box #errorLogin').should('have.text', 'O login da conta esta incorreto ou sua conta foi desativada temporariamente. Aguarde e tente novamente mais tarde.')
    });
})