import { LogInPage } from "./pages/login_page";

const loginPage = new LogInPage();

const username = 'admin';
const password = 'Admin123#$%*';

describe('Logout test', () => {

    beforeEach(() => {
        cy.visit('http://localhost/orangehrm-5.5/web/index.php/dashboard/index');
    });

    it('logout test', () => {
        loginPage.enterUserName(username);
        loginPage.enterPassword(password);
        loginPage.clickLogin();
        cy.log("Logged in successfully");
        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

        cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');
    });
});
