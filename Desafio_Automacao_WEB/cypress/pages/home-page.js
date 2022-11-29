class HomePage{
    url = 'https://magento.softwaretestingboard.com/'
    btnSignUp = 'Create an Account'


    AcessarCreateAccount(){
        cy.visit(this.url)
        cy.contains(this.btnSignUp).click()
    }
}    





export default HomePage