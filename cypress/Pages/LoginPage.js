export class LoginPage{

webLocators={
txtUserName:'#user-name',
txtPassword:'#password',
btnLogin:'#login-button'
}

openURL(){
    cy.visit(Cypress.env('URL'))
}

enterUserName(uName){
    cy.get(this.webLocators.txtUserName).type(uName)
}

enterPassword(pwd){
    cy.get(this.webLocators.txtPassword).type(pwd)
}

clickLoginButton(){
    cy.get(this.webLocators.btnLogin).click()
   
}

}