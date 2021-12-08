describe('Registration Customer', () => {
  
  beforeEach(() => cy.accessForm())

  it('Create Customer', () => {
    const customer = 'pf'

    cy.standardFormFields()
    cy.fillFormCustomer(customer)
    cy.submitForm()
    cy.successfulCreation()
    cy.clearCookies()
  })

  it('Validate existing taxvat', () => {
    const taxvat = 'pf'
    cy.standardFormFields()
    cy.fillFormCustomer(taxvat)
    cy.validateExistTaxvat(taxvat)
  })

  it('Validate existing e-mail', () => {
    const customer = 'pf'
    cy.standardFormFields()
    cy.fillFormCustomer(customer)
    cy.validateExistEmail(customer)
  })
})