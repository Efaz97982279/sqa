import { LogInPage } from "./pages/login_page";

const loginPage = new LogInPage();

const username = 'admin';
const password = 'Admin123#$%*';

describe('All login tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost/orangehrm-5.5/web/index.php/dashboard/index');
    });

    it('Valid username with valid password', () => {
        loginPage.enterUserName(username);
        loginPage.enterPassword(password);
        loginPage.clickLogin();
        cy.log("Logged in successfully");

        
        cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php'); 
    }),

    it('Valid username with invalid password', () => {
        loginPage.enterUserName(username);
        loginPage.enterPassword('admin');
        loginPage.clickLogin();
        cy.log("Wrong password");

        
        cy.contains('Invalid credentials').should('be.visible'); 
    }) ,

    it('Invalid username with valid password', () => {
        loginPage.enterUserName('admin123');
        loginPage.enterPassword(password);
        loginPage.clickLogin();
        cy.log("Wrong username");

        
        cy.contains('Invalid credentials').should('be.visible'); 
    }),

    it('Invalid username with invalid password', () => {
        loginPage.enterUserName('Admin');
        loginPage.enterPassword('admin');
        loginPage.clickLogin();
        cy.log("Wrong username and password");

        
        cy.contains('Invalid credentials').should('be.visible'); 
    })
    
});
