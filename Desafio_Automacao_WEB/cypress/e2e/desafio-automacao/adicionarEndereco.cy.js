/// <reference types="cypress" />

import AddNewAddressPage from "../../pages/add-new-address-page"
import AddressBookPage from "../../pages/address-book-page"
import CreateAccountPage from "../../pages/create-account-page"
import HomePage from "../../pages/home-page"
import MyAccountPage from "../../pages/my-account-page"
import { faker } from '@faker-js/faker';



describe('Magento Software', () => {

   const homePage = new HomePage
   const createAccountPage = new CreateAccountPage
   const myAccountPage = new MyAccountPage 
   const addNewAddressPage = new AddNewAddressPage
   const addressBookPage = new AddressBookPage
   const primeiroNome = faker.name.firstName()
   const ultimoNome = faker.name.lastName()
   const email = faker.internet.email()
   const senha = faker.internet.password()
   const telefone = faker.phone.number()
   const endereco = faker.address.streetAddress()
   const cidade = faker.address.city()
   const codigoPostal = faker.address.zipCode()
   const estado = faker.address.state()
   const pais = faker.address.country()
   

    beforeEach ('', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
    })


    it.only('clicar no Create an Account', () => {
        homePage.AcessarCreateAccount()
        createAccountPage.SingUp(primeiroNome, ultimoNome, email, senha, senha)
        myAccountPage.AcessarAddNewAddress()
        addNewAddressPage.AdicionarEnderecoPadrao(telefone, endereco, cidade, codigoPostal, estado, pais)
        addressBookPage.ValidarEnderecoSalvo()
        myAccountPage.ValidarMyAccount()
    })
 

})