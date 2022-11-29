

class AddNewAddressPage{

    inputPhoneNumber = '#telephone'
    inputStreetAddress = '#street_1'
    inputCity = '#city'
    inputPostalCode = '#zip'
    selectState = '#region_id'
    selectCountry= '#country'
    btnSaveAddress = 'Save Address'


    AdicionarEnderecoPadrao(phoneNumber, streetAddress, city, postalCode, state, country){
        cy.get(this.inputPhoneNumber).type(phoneNumber)
        cy.get(this.inputStreetAddress).type(streetAddress)
        cy.get(this.inputCity).type(city)
        cy.get(this.inputPostalCode).type(postalCode)
        cy.get(this.selectState).select(state)
        cy.get(this.selectCountry).select(country)
        cy.contains(this.btnSaveAddress).click()
    }
    
}

export default AddNewAddressPage