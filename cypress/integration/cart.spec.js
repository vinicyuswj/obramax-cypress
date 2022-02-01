/// <reference types="cypress" />

describe('Cart Page', () => {
  it('Add unit of product items using the "+" button', () => {
    cy.visit('/')
    cy.get('form#search_mini_form div span input#search').type('Piso')
  })
})