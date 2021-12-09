describe('Registration Customer Company', () => {
  beforeEach(() => cy.accessForm())

  it.skip('Create Customer', () => {
    const customer = 'pj'

    cy.standardFormFields()
    cy.fillFormCustomer(customer)
    cy.submitForm()
    cy.successfulCreation()
    cy.clearCookies()
  })

  it.skip('Validate existing taxvat', () => {
    const taxvat = 'pj'
    cy.standardFormFields()
    cy.fillFormCustomer(taxvat)
    cy.validateExistTaxvat(taxvat)
  })

  it.skip('Validate existing e-mail', () => {
    const customer = 'pj'
    cy.standardFormFields()
    cy.fillFormCustomer(customer)
    cy.validateExistEmail(customer)
  })
})