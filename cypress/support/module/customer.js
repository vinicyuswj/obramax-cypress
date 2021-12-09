const faker = require('faker-br');

exports.customer = {
    customer:{
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        cpf: faker.br.cpf(),
        email: faker.name.firstName()+'test123@mailinator.com',
        companyName: faker.name.lastName(),
        stateInscription: "196357582450",
        cnpj: faker.br.cnpj(),
        telefone: '11965555511',
        password: '4ut0m4c4aoCYPRESS'
    },
    customerExistPF:{ 
        email: 'qa@creditoonline.com.br',
        cpf: '67251817837',
      
    },
    customerExistPJ:{
        email_pj: 'qa@contapj.com.br',
        cnpj: '47253900000104',
    }
}