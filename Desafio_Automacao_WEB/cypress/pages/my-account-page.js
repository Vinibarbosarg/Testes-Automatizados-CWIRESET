class MyAccountPage {
    btnDefaultBillingAddress = '[data-ui-id="default-billing-edit-link"]'
    msgSuccessRegistering = '[data-bind="html: $parent.prepareMessageForHtml(message.text)"]'


    AcessarAddNewAddress(){
        cy.get(this.btnDefaultBillingAddress).click()
    }

    ValidarMyAccount(){
        cy.get('.base').should('have.text','My Account')
    }
}

export default MyAccountPage