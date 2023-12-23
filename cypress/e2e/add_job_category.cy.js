import { LogInPage } from "./pages/login_page"

const loginPage = new LogInPage()

const username = 'admin';
const password = 'Admin123#$%*'
const job_name = 'IT1'


describe('Adding job category', () => {

    beforeEach(() => {
        cy.visit('http://localhost/orangehrm-5.5/web/index.php/dashboard/index')
    })

    it('Add jobs', () => {
        loginPage.enterUserName(username);
        loginPage.enterPassword(password);
        loginPage.clickLogin();
        cy.log("ok")


        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get('.oxd-dropdown-menu > :nth-child(4)').click()
        cy.get('.oxd-button').click()

        cy.get(':nth-child(2) > .oxd-input').type(job_name)
        cy.get('.oxd-button--secondary').click()

        cy.contains('Successfully Saved').should('be.visible');

        
        cy.contains('.orangehrm-container', job_name).should('be.visible');

    })



})