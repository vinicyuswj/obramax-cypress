/// <reference types="cypress" />

import signin from '../../pages/SigninPage'
import signinFactory from '../../factories/SigninFactory'


describe('EC - Address', () => {
    var customer = signinFactory.customer()
    beforeEach(() => {
        
        cy.clearCookies()
        cy.clearLocalStorage()
        signin.accessLogin()
        signin.authentication(customer)
        signin.submit()
        cy.get('.nav .nav#customer-address').click()
        cy.wait(3000)
        cy.get('.actions-toolbar .primary button[title="Adicionar Novo Endereço"]').click()
    })

    it('Add address', () => {
        cy.get('.fieldset div.field div.control input#telephone').type('1199999999')
        cy.get('.fieldset div.field div.control input#zip').type('03476000')
        // cy.get('.fieldset div.field div.control input#street_0').type('Rua Tres')
        cy.get('.fieldset div.field div.control input#street_1').type('202')
        // cy.get('.fieldset div.field div.control input#street_2').type('Vila Dois')
        cy.get('.fieldset div.field div.control input#street_3').type('apto 2')
        // cy.get('.fieldset div.field div.control input#street_3').type('apto 2')
        cy.get('.fieldset div.field div.control input#vat_id').type('46572709000162')
        // cy.get('.fieldset div.field div.control input#city').type('São Paulo')
        // cy.get('.fieldset div.field div.control select#region_id').select('São Paulo')
        // cy.get('input[type="checkbox"]#primary_billing').check()
        cy.get('.actions-toolbar .primary button[data-action="save-address"]').click()
    })
    it('Add address as default billing', () => {
        cy.get('.fieldset div.field div.control input#telephone').type('1199999999')
        cy.get('.fieldset div.field div.control input#zip').type('03476000')
        // cy.get('.fieldset div.field div.control input#street_0').type('Rua Tres')
        cy.get('.fieldset div.field div.control input#street_1').type('202')
        // cy.get('.fieldset div.field div.control input#street_2').type('Vila Dois')
        cy.get('.fieldset div.field div.control input#street_3').type('apto 2')
        // cy.get('.fieldset div.field div.control input#street_3').type('apto 2')
        cy.get('.fieldset div.field div.control input#vat_id').type('46572709000162')
        // cy.get('.fieldset div.field div.control input#city').type('São Paulo')
        // cy.get('.fieldset div.field div.control select#region_id').select('São Paulo')
        cy.get('input[type="checkbox"]#primary_billing').check()
        cy.get('.actions-toolbar .primary button[data-action="save-address"]').click()
    })

    it('Add address as default delivery', () => {
        cy.get('.fieldset div.field div.control input#telephone').type('1199999999')
        cy.get('.fieldset div.field div.control input#zip').type('03476000')
        // cy.get('.fieldset div.field div.control input#street_0').type('Rua Tres')
        cy.get('.fieldset div.field div.control input#street_1').type('202')
        // cy.get('.fieldset div.field div.control input#street_2').type('Vila Dois')
        cy.get('.fieldset div.field div.control input#street_3').type('apto 2')
        // cy.get('.fieldset div.field div.control input#street_3').type('apto 2')
        cy.get('.fieldset div.field div.control input#vat_id').type('46572709000162')
        // cy.get('.fieldset div.field div.control input#city').type('São Paulo')
        // cy.get('.fieldset div.field div.control select#region_id').select('São Paulo')
        cy.get('input[type="checkbox"]#primary_shipping').check()
        cy.get('.actions-toolbar .primary button[data-action="save-address"]').click()
    })

    it.only('Required Fields', () => {
        cy.get('.actions-toolbar .primary button[data-action="save-address"]').click()
        cy.get('.actions-toolbar .primary button[data-action="save-address"]').click()
        cy.wait(4000)

        // cy.get('.mage-error#firstname-error')
        // .should('have.text', 'Este campo é obrigatório.')
        // .should('be.visible')

        // cy.get('.mage-error#telephone-error')
        // .should('have.text', 'Este campo é obrigatório.')
        // .should('be.visible')

        // cy.get('.mage-error#zip-error')
        // .should('have.text', 'Este campo é obrigatório.')
        // .should('be.visible')

        // cy.get('.mage-error#street_0-error')
        // .should('have.text', 'Este campo é obrigatório.')
        // .should('be.visible')

        // cy.get('.mage-error#street_1-error')
        // .should('have.text', 'Este campo é obrigatório.')
        // .should('be.visible')

        // cy.get('.mage-error#street_2-error')
        // .should('have.text', 'Este campo é obrigatório.')
        // .should('be.visible')

        // cy.get('.mage-error#city-error')
        // .should('have.text', 'Este campo é obrigatório.')
        // .should('be.visible')

        // cy.get('.mage-error#region_id-error')
        // .should('have.text', 'Por favor selecione uma opção.')
        // .should('be.visible')

    });
});