

import { LoginPage } from "../../Pages/LoginPage";
const loginPageObj=new LoginPage()
import loginData from '../../fixtures/loginData.json'
import urlsdata from '../../fixtures/urlsdata.json'


describe('test automation',()=>{

    it('login flow',()=>{
        loginPageObj.openURL()
        loginPageObj.enterUserName(loginData.userName)
        loginPageObj.enterPassword(loginData.passWord)
        loginPageObj.clickLoginButton()
        cy.url().should('contains',urlsdata.URLFraction)
       


})







})