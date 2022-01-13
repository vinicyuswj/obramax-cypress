const el = require('./elements').ELEMENTS
const faker = require('faker-br')
const user = {
    password:'4ut0m4c40@wj',
    name: faker.name.firstName(),
    cpf: '67251817837',
    cnpj: '47253900000104',
    email: 'qa@creditoonline.com.br',
    phone: '57600752018',
    stateRegistration: '922296693980',
    invalidEmail: 't@testetets',
    invalidCPF: '0000000000',
    invalidCNPJ: '00000000000000',
    invalidPassword: '1234567'  
}

class Form {

    acessForm(){
        cy.visit('/customer/account/create')
    }
    
    fillForm(){
        cy.get('input#firstname').type(user.name)
        cy.get('input#lastname').type(faker.name.lastName())
        cy.get('input#sms_phone').type(user.phone)
        cy.get('input#password').type(user.password)
        cy.get('input#password-confirmation').type(user.password)
    }

    createCustomer(){
        cy.get('input#email_address').type(faker.internet.email())
        cy.get('select#legal_type').select('1')
        cy.get('input#taxvat').type(faker.br.cpf())
        this.fillForm()
        cy.contains('button', 'Criar conta').click()
    }

    validateCreation(){
        cy.get('.message-success > div').should('have.text', 'Obrigado por registrar-se com Obramax.')
        cy.get('.message-success > div').should('be.visible')
        cy.get('li[class="greet welcome"]').should('contain', 'Olá, '+user.name)
    }

    submitExistingTaxvat(){
        cy.get('input#email_address').type(faker.internet.email())
        cy.get('select#legal_type').select('1')
        cy.get('input#taxvat').type(user.cpf)
        this.fillForm()
        cy.contains('button', 'Criar conta').click()
    }

    validateExistingTaxvat(){
        cy.get('.message-error > div').should('be.visible')
        cy.get('.message-error > div').should('have.text', 'Este CPF/CNPJ já foi usado em outro cadastro desta loja!')
    }

    submitExistingEmail(){
        cy.get('input#email_address').type(user.email)
        cy.get('select#legal_type').select('1')
        cy.get('input#taxvat').type(faker.br.cpf())
        this.fillForm()
        cy.contains('button', 'Criar conta').click()
    }

    validateExistingEmail(){
        cy.get('.message-error > div').should('be.visible')
        cy.get('.message-error > div').should('have.text', 'Já existe uma conta com este endereço de e-mail. Se você tem certeza que é o seu endereço de e-mail,  clique aqui para obter sua senha e acessar a sua conta.');
    }

    createCompany(){
        cy.get('input#email_address').type(faker.internet.email())
        cy.get('select#legal_type').select('2')
        cy.get('input#taxvat').type(faker.br.cnpj())
        cy.get('input#state_inscription').type(user.stateRegistration)
        cy.get('input#company_name').type(faker.name.lastName())
        this.fillForm()
        cy.contains('button', 'Criar conta').click()
    }

    submitExistingEmailCompany(){
        cy.get('input#email_address').type(user.email)
        cy.get('select#legal_type').select('2')
        cy.get('input#taxvat').type(faker.br.cnpj())
        cy.get('input#state_inscription').type(user.stateRegistration)
        cy.get('input#company_name').type(faker.name.lastName())
        this.fillForm()
        cy.contains('button', 'Criar conta').click()
    }

    submitExistingTaxvatCompany(){
        cy.get('input#email_address').type(faker.internet.email())
        cy.get('select#legal_type').select('2')
        cy.get('input#taxvat').type(user.cnpj)
        cy.get('input#state_inscription').type(user.stateRegistration)
        cy.get('input#company_name').type(faker.name.lastName())
        this.fillForm()
        cy.contains('button', 'Criar conta').click()
    }

    invalidEmail(){
        cy.get('input#email_address').type(user.invalidEmail)
        cy.get('select#legal_type').select('1')
        cy.get('input#taxvat').type(faker.br.cpf())
        this.fillForm()
        cy.contains('button', 'Criar conta').click()
    }

    invalidCpf(){
        cy.get('input#email_address').type(faker.internet.email())
        cy.get('select#legal_type').select('1')
        cy.get('input#taxvat').type(user.invalidCPF)
        this.fillForm()
        cy.contains('button', 'Criar conta').click()
    }

    invalidCpnj(){
        cy.get('input#email_address').type(faker.internet.email())
        cy.get('select#legal_type').select('2')
        cy.get('input#taxvat').type(user.invalidCNPJ)
        cy.get('input#state_inscription').type(user.stateRegistration)
        cy.get('input#company_name').type(faker.name.lastName())
        this.fillForm()
        cy.contains('button', 'Criar conta').click()
    }

    invalidPassword(){
       
        this.fillForm()
        cy.get('input#email_address').type(faker.internet.email())
        cy.get('select#legal_type').select('1')
        cy.get('input#taxvat').type(faker.br.cpf())
        cy.get('input#password').clear()
        cy.get('input#password').type(user.invalidPassword)
        cy.get('input#password-confirmation').clear()
        cy.get('input#password-confirmation').type(user.invalidPassword)
        cy.contains('button', 'Criar conta').click()
    }

    validationRequiredFields(field){
        switch (field) {
            case 'email':
                cy.get('div#email_address-error').should('contain', 'Por favor, insira um email válido (Ex: joaoninguem@dominio.com.br).')
                break
            case 'taxvat':
                cy.get('div#taxvat-error').should('contain', 'O CPF/CNPJ informado não é um CPF/CNPJ válido.')
                break
            case 'password':
                cy.get('div#password-error').should('have.text', 'Este campo deve conter 8 ou mais caracteres. Espaços serão ignorados.')
                break
          }
    }

}

export default new Form()