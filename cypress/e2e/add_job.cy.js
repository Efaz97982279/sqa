import { LogInPage } from "./pages/login_page"

const loginPage = new LogInPage()

const username = 'admin';
const password = 'Admin123#$%*'
const job_title = 'GM1';
const job_description = 'a Manager needed';



describe('All job adding tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost/orangehrm-5.5/web/index.php/dashboard/index')
    })

    it('Adding a job', () => {
        loginPage.enterUserName(username);
        loginPage.enterPassword(password);
        loginPage.clickLogin();
        cy.log("ok")
        
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
        cy.get('.oxd-button').click()
        

        cy.get(':nth-child(2) > .oxd-input').type(job_title)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type(job_description)

        
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('abc')
        cy.get('.oxd-button--secondary').click()

        cy.contains('Successfully Saved').should('be.visible');

        
        cy.contains('.orangehrm-container', job_title).should('be.visible');


    })


    
})