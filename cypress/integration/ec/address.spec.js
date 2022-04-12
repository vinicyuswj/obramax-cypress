/// <reference types="cypress" />

import signin from '../../pages/SigninPage'
import signinFactory from '../../factories/SigninFactory'
import address from '../../pages/AddressPage'
import addressFactory from '../../factories/AddressFactory'

// var faker = require('faker-br')

describe('EC - Address', () => {
    var customer = signinFactory.customer()
    var dataAddress = addressFactory.address()

    before(() => {
        signin.accessLogin()
        signin.authentication(customer)
        signin.submit()
        address.catalogAddress()
    })

    beforeEach(() => {
        address.newAddress()
    });

    it('Add address', () => {
        address.fillAddress(dataAddress)
        address.add()
        cy.contains('.message-success > div', dataAddress.messageSucessMessage)
    })
    it('Add address as default billing', () => {
        address.fillAddress(dataAddress)
        address.checkDefaultBillingAddress()
        address.add()
        cy.contains('.message-success > div', dataAddress.messageSucessMessage)
    })

    it('Add address as default delivery', () => {
        address.fillAddress(dataAddress)
        address.checkDefaultDeliveryAddress()
        address.add()
        cy.contains('.message-success > div', dataAddress.messageSucessMessage)
    })

    it('Required Fields', () => {
        address.add()
        address.requiredFields(dataAddress)
    });
});