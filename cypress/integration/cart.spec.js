/// <reference types="cypress" />

import cart from '../pages/CartPage'

describe('Cart Page', () => {

  beforeEach(() => {
    cy.visit('/')
    // cy.intercept('/customer/section/load?sections=customer').as('loadPage')
    cart.searchProduct('10101010')

    cart.nameProductShouldBe('Produto TESTE')
    // cy.wait('@loadPage')
    cy.wait(3000)
  })

  it('Add unit of product items using the "+" button', () => {
    cart.addCart()
    cart.alertAddProductToCart('Você adicionou Produto TESTE ao carrinho de compras. Se deseja finalizar a compra ')
    cart.goCart()
    cart.validateQuantity(1)
    cart.plusButton()
    cart.plusButton()
    cart.updateCart()
    cart.validateQuantity(3)
    cart.alertUpdateCart('Carrinho atualizado com sucesso!')
    cart.unitPrice('R$60,00')
    cart.subtotalPrice('R$180,00')
    cy.clearCookies()

  })

  it('Remove unit of product items using the "-" button', () => {
    cy.intercept('/checkout/cart/updatePost').as('updateCart')
    cart.inputQtyPageProduct(3)
    cart.addCart()
    cart.alertAddProductToCart('Você adicionou Produto TESTE ao carrinho de compras. Se deseja finalizar a compra ')
    cart.goCart()
    cart.unitPrice('R$60,00')
    cart.subtotalPrice('R$180,00')
    cart.validateQuantity(3)
    cart.minusButton()
    cart.minusButton()
    cart.updateCart()
    cy.wait('@updateCart')
    cart.alertUpdateCart('Carrinho atualizado com sucesso!')
    cart.validateQuantity(1)
    cart.unitPrice('R$60,00')
    cart.subtotalPrice('R$60,00')
  })

  it('Delete item from cart using trash button', () => {
    cart.addCart()
    cart.alertAddProductToCart('Você adicionou Produto TESTE ao carrinho de compras. Se deseja finalizar a compra ')
    cart.goCart()
    cy.wait(3000)
    cart.buttonTrash()
    cart.validateEmptyCart()
  })

  it('Cart clean', () => {
    cart.addCart()
    cart.alertAddProductToCart('Você adicionou Produto TESTE ao carrinho de compras. Se deseja finalizar a compra ')
    cart.goCart()
    cy.wait(3000)
    cart.clearCart()
    cart.validateEmptyCart()
  })

  it.only('Validate option to add items to quote', () => {
    cart.addCart()
    cart.alertAddProductToCart('Você adicionou Produto TESTE ao carrinho de compras. Se deseja finalizar a compra ')
    cart.goCart()
    cy.wait(3000)
    cart.validateButtonWishlist()

  })
})