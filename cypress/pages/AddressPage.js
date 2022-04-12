class AddressPage {

    catalogAddress(){
        cy.get('.nav .nav#customer-address').click()
    }   
    
    newAddress(){
        cy.wait(3000)
        cy.get('.actions-toolbar .primary button[title="Adicionar Novo Endereço"]').click()
    }

    fillAddress(data){
        cy.get('.fieldset div.field div.control input#telephone').type(data.phone)
        cy.get('.fieldset div.field div.control input#zip').type('03476000')
        cy.get('.fieldset div.field div.control input#street_1').type(data.houseNumer)
        cy.get('.fieldset div.field div.control input#street_3').type(data.complement)
        cy.get('.fieldset div.field div.control input#vat_id').type(data.taxvat)
    }

    checkDefaultBillingAddress(){
        cy.get('input[type="checkbox"]#primary_billing').check()
    }

    checkDefaultDeliveryAddress(){
        cy.get('input[type="checkbox"]#primary_shipping').check()
    }

    add(){
        cy.get('.actions-toolbar .primary button[data-action="save-address"]').click()
    }

    
    requiredFields(data){
        cy.contains(data.messageErrorElement, data.messageException)
        cy.contains(data.messageErrorElement, data.messageStreet)
        cy.contains(data.messageErrorElement, data.messageCity)
        cy.contains(data.messageErrorElement, data.messagePhone)
        cy.contains(data.messageErrorElement, data.messagePostCode)
    }
  
  }
  
  export default new AddressPage()