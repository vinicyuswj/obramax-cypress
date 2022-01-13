const user = {
    email: "qa@creditoonline.com.br",
    password: "Qa#automacao2020",
    name: "Usuário",
    cnpj: "47253900000104",
    cpf: "67251817837",
    invalidEmail: "t@testets",
    invalidTaxvat: "12345678910",
    invalidPassword: "123456"
}

class Login {
    
    accessLogin(){
        cy.visit('/customer/account/login')
    }

    authenticationWithEmail(){
        cy.get('input#email').type(user.email)
        cy.get('input[type="password"]').type(user.password)
        //cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
        cy.get('button#send2').first().click()
    }

    validUserLogged(){
        cy.get('span[class="base"]').should('have.text', 'Minha Conta')
        //cy.get('li[class="greet welcome"]').should('contain', 'Olá, '+user.name)
    }

    authenticationWithCpf(){
        cy.get('input#email').type(user.cpf)
        cy.get('input[type="password"]').type(user.password)
        cy.get('button#send2').first().click()
    }

    authenticationWithCnpj(){
        cy.get('input#email').type(user.cnpj)
        cy.get('input[type="password"]').type(user.password)
        cy.get('button#send2').first().click()
    }

    authenticationInvalidEmail(){
        cy.get('input#email').type(user.invalidEmail)
        cy.get('input[type="password"]').type(user.password)
        cy.get('button#send2').first().click()
    }

    authenticationInvalidPassword(){
        cy.get('input#email').type(user.email)
        cy.get('input[type="password"]').type(user.invalidPassword)
        cy.get('button#send2').first().click()
    }

    authenticationInvalidTaxvat(){
        cy.get('input#email').type(user.invalidTaxvat)
        cy.get('input[type="password"]').type(user.invalidPassword)
        cy.get('button#send2').first().click()
    }

    validateErrorAuthentication(error){
        cy.wait(3000)
        switch (error) {
            case 'password':
                cy.contains('O login da conta esta incorreto ou sua conta foi desativada temporariamente. Aguarde e tente novamente mais tarde')
                break
            case 'email_invalid':
                cy.contains('Um login e uma senha são necessários.')
                break
        }
    }

}

export default new Login()