import { LogInPage } from "./pages/login_page";

const loginPage = new LogInPage();

const username = 'admin';
const password = 'Admin123#$%*';

describe('Searching an employee', () => {
    beforeEach(() => {
        cy.visit('http://localhost/orangehrm-5.5/web/index.php/dashboard/index');
    })

    it('Search for an existing employee', () => {
        loginPage.enterUserName(username);
        loginPage.enterPassword(password);
        loginPage.clickLogin();
        cy.log("ok")

        cy.get(':nth-child(1) > .oxd-main-menu-item').click();

        cy.get(':nth-child(2) > .oxd-input').type('efaz5663')

        cy.contains('Search').click({ force: true });


        cy.wait(2000);


    });
});
