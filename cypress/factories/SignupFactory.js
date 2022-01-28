var faker = require('faker-br')
var cpf = require('gerador-validador-cpf')

export default {
    customer: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var fullName = `${firstName} ${lastName}`
        var data = {
            firstName: firstName,
            lastName: lastName,
            fullName: fullName,
            cpf: cpf.generate(),
            cnpj: faker.br.cnpj(),
            companyName: fullName,
            email: faker.internet.email(fullName),
            phone: '11971459635',
            password: 'Aut0m4c@0obRAMAx'
        }
        return data
    }
}
