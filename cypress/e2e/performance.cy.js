import { LogInPage } from "./pages/login_page";

const loginPage = new LogInPage();

const username = 'admin'
const password = 'Admin123#$%*'

const username1 = 'efaz11110'
const username2 = 'john1234'
const password1 = 'Efaz1234$'

describe('Performance test', () => {

    beforeEach(() => {
        cy.visit('http://localhost/orangehrm-5.5/web/index.php/dashboard/index');
    });

    it('add employee tracker normal', () => { //admin
        loginPage.enterUserName(username);
        loginPage.enterPassword(password);
        loginPage.clickLogin();
        cy.log("Logged in successfully");

        cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');
        cy.get(':nth-child(7) > .oxd-main-menu-item').click()
        cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
        cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Mr. John Bob')
        cy.xpath('//*[contains(@class,"oxd-autocomplete-dropdown")]/*[normalize-space(.)="Mr. John Bob"]').click()
        cy.get(':nth-child(2) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Md')
        cy.xpath('//*[contains(@class,"oxd-autocomplete-dropdown")]/*[normalize-space(.)="Md Masum Khondhoker Efaz"]').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()
        cy.xpath('//div/*[text()[contains(., "18")]]').click()
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()
        cy.xpath('//div/*[text()[contains(., "24")]]').eq(1).click()
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()
        cy.xpath('//div/*[text()[contains(., "27")]]').eq(1).click()
        cy.get('.oxd-button--secondary').click()

        cy.contains('Successfully Activated').should('be.visible');

        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

        cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

    }),

        it('self evaluation for employee normal', () => { //employee
            loginPage.enterUserName(username2);
            loginPage.enterPassword(password1);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');
            cy.get(':nth-child(4) > .oxd-main-menu-item').click()
            cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
            cy.get('.oxd-topbar-body-nav-tab-link').click()
            cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > .oxd-icon-button > .oxd-icon').click()
            cy.get(':nth-child(2) > .oxd-input').type('90')
            cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Done almost all task.')
            cy.get('.oxd-button--secondary').click()
            cy.get('.orangehrm-modal-footer > .oxd-button--secondary').click()
            
            cy.contains('Successfully Saved').should('be.visible');

            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        }),

        it('supervisor evaluation for employee normal', () => { //supervisor employee
            loginPage.enterUserName(username1);
            loginPage.enterPassword(password1);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');
            cy.get(':nth-child(5) > .oxd-main-menu-item').click()
            cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
            cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click()
            cy.get('.oxd-autocomplete-text-input > input').type('Mr. John Bob')
            cy.xpath('//*[contains(@class,"oxd-autocomplete-dropdown")]/*[normalize-space(.)="Mr. John Bob"]').click()
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
            cy.xpath('(//*[normalize-space(.)="Quality manager"])[1]').click()
            cy.get('.oxd-button--secondary').click()
            cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > .oxd-icon-button > .oxd-icon').click()
            cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type('85')
            cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Need to meet the requirement.')
            cy.get('.oxd-date-input > .oxd-input').click()
            cy.xpath('//div/*[text()[contains(., "22")]]').click()
            cy.get('.orangehrm-performance-review-grid-rating > .oxd-input-group > :nth-child(2) > .oxd-input').type('85')
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Complete all tasks.')
            cy.get('.oxd-button--secondary').click()
            cy.get('.orangehrm-modal-footer > .oxd-button--secondary').click()

            cy.contains('Successfully Saved').should('be.visible');

            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        }),
        it('check evaluation for employee normal', () => { //employee
            loginPage.enterUserName(username2);
            loginPage.enterPassword(password1);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');
            cy.get(':nth-child(4) > .oxd-main-menu-item').click()
            cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
            cy.get('.oxd-topbar-body-nav-tab-link').click()
            cy.get(':nth-child(2) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > .oxd-icon-button > .oxd-icon').click()

            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        }),
        it('supervisor evaluation for employee invalid', () => { //supervisor employee irregular
            loginPage.enterUserName(username1);
            loginPage.enterPassword(password1);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');
            cy.get(':nth-child(5) > .oxd-main-menu-item').click()
            cy.get('.oxd-autocomplete-text-input > input').type('Mr.')
            cy.get('.oxd-button--secondary').click()
            

            cy.contains('Invalid').should('be.visible');

            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        })

})