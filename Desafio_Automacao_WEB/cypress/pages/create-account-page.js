

class CreateAccountPage {
    
    inputFristName = '#firstname'
    inputLastName = '#lastname'
    inputEmail = '#email_address'
    inputPassword = '#password'
    inputConfirmPassword = '#password-confirmation'
    btnCreateAccount = '.action.submit.primary'

    


    SingUp(fristName, lastName, email, password, confirmPassword){
        cy.get(this.inputFristName).type(fristName)
        cy.get(this.inputLastName).type(lastName)
        cy.get(this.inputEmail).type(email)
        cy.get(this.inputPassword).type(password)
        cy.get(this.inputConfirmPassword).type(confirmPassword)
        cy.get(this.btnCreateAccount).click()
    }
}

export default CreateAccountPage