
class AddressBookPage {

    msgSuccessSavingAddress = '.message-success > div'
    btnMyAccount = '.items > :nth-child(1) > a'


    ValidarEnderecoSalvo(){
        cy.get(this.msgSuccessSavingAddress).should('contain','You saved the address.')
        cy.get(this.btnMyAccount).click()
    }


}

export default AddressBookPage