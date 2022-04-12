var faker = require('faker-br')

export default {
    address: function(){
      
      var data =  {
        email: 'qa@creditoonline.com.br',
        password: 'Qa#automacao2020',
        phone: faker.phone.phoneNumber('11 91 ### ####'),
        houseNumer: faker.random.number({ max: 1000 }),
        complement: faker.random.hexaDecimal(100),
        taxvat: faker.br.cnpj(),
        messageSucessElement: '.message-success > div',
        messageSucessMessage: 'Você salvou o endereço.',
        messageErrorElement: '#maincontent .page .messages',
        messageException: 'One or more input exceptions have occurred.',
        messageStreet: '"street" is required. Enter and try again.',
        messageCity: '"city" is required. Enter and try again.',
        messagePhone: '"telephone" is required. Enter and try again.',
        messagePostCode: '"postcode" is required. Enter and try again.'
      }
      return data
    }
  }
  