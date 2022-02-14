const el = require('./elements/elements').ELEMENTS
class CartPage {

  searchProduct(sku){
    cy.get('form#search_mini_form div span input#search').type(sku)
    cy.get('button#algolia-glass').click()
    cy.get('.result-content a.result .product_brand').click()
  }

  nameProductShouldBe(nameProduct){
    cy.get('.product-info-main .page-title-wrapper h1 span[class="base"]').should('have.text', nameProduct)
  }

  addCart(){
    cy.get('button[title="Adicionar ao Carrinho"]').click()
  }

  alertAddProductToCart(message){
    cy.get('.page div div').should('contain', message)
    cy.get('.page div div').should('be.visible')
  }

  alertUpdateCart(message){
    cy.get('.page-main  div div[role="alert"] .message-success div').should('have.text', message)
  }

  goCart(){
    cy.get('.header-webjump div[data-block="minicart"]').click()
    cy.get('button[class="action primary checkout"]').click()
    cy.get('.page-main .page-title-wrapper h1 span.base').should('have.text', 'Carrinho de Compras')
  }

  validateQuantity(qty){
    cy.get('.align-center input').should('have.value', qty)
  }

  updateCart(){
    cy.get('.cart button[value="update_qty"]').click()
  }

  plusButton(){
    cy.get('.align-center button[class^="plusQty"]').click()
  }

  unitPrice(price){
    cy.get('#item-original-price span').should('have.text', price)
  }

  subtotalPrice(subtotal){
    cy.get('td[data-th="Subtotal"] .price-excluding-tax .price').should('have.text', subtotal)

  }

  inputQtyPageProduct(qty){
    cy.get('.control input[type="number"]').type(qty)
  }


  minusButton(){
    cy.get('.align-center button[class^="minusQty"]').click()
  }

  buttonTrash(){
    cy.get('.actions-toolbar a[title="Excluir"] span').first().click({force: true})
  }

  validateEmptyCart(){
    cy.contains('.cart-empty', 'Nenhum item está em seu carrinho de compras')
  }

  clearCart(){
    cy.get('button[class="default_btn btn_cinza action clear_cart_button"]').click()
  }

  validateButtonWishlist(){
    cy.get('button#move-all-to-wishlist').should('be.visible')
    cy.contains('button#move-all-to-wishlist', 'ADICIONAR AOS ORçAMENTOS')
  }
}

export default new CartPage()