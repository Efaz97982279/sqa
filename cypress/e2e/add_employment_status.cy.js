import { LogInPage } from "./pages/login_page"

const loginPage = new LogInPage()

const username = 'admin';
const password = 'Admin123#$%*'
const em_name = 'abcd'


describe('Adding employment status', () => {

    beforeEach(() => {
        cy.visit('http://localhost/orangehrm-5.5/web/index.php/dashboard/index')
    })

    it('Add employment status', () => {
        loginPage.enterUserName(username);
        loginPage.enterPassword(password);
        loginPage.clickLogin();
        cy.log("ok")


        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-link').click()
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input').type(em_name)
        cy.get('.oxd-button--secondary').click()

        cy.contains('Successfully Saved').should('be.visible');

        
        cy.contains('.orangehrm-container', em_name).should('be.visible');


    })



})