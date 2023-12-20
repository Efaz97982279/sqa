import { LogInPage } from "./pages/login_page";

const loginPage = new LogInPage();

const username = 'admin'
const password = 'Admin123#$%*'

const username1 = 'efaz11110'
const password1 = 'Efaz1234$'

describe('Timesheet test', () => {

    beforeEach(() => {
        cy.visit('http://localhost/orangehrm-5.5/web/index.php/dashboard/index');
    });

    it('punch in for employee normal', () => { //emplyee
        loginPage.enterUserName(username1);
        loginPage.enterPassword(password1);
        loginPage.clickLogin();
        cy.log("Logged in successfully");

        cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item')
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click()
        cy.get('.oxd-button').click()
        cy.contains('Successfully Saved').should('be.visible');


        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

        cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

    }),

        it('punch out for employee normal', () => { //emplyee
            loginPage.enterUserName(username1);
            loginPage.enterPassword(password1);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');
            cy.get(':nth-child(2) > .oxd-main-menu-item').click()
            cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item')
            cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
            cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click()
            cy.get('.oxd-button').click()
            cy.contains('Successfully Saved').should('be.visible');


            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        }),
        it('attendance record from an employee normal', () => { //emplyee
            loginPage.enterUserName(username1);
            loginPage.enterPassword(password1);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');
            cy.get(':nth-child(3) > .oxd-main-menu-item').click()
            cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
            cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
            cy.get('.oxd-date-wrapper>div>input').click();
            cy.xpath('//div[text()[contains(., "15")]]').click();
            cy.get('[type="submit"]').click();

            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        }),
        it('employee attendance record from admin normal', () => { //admin
            loginPage.enterUserName(username);
            loginPage.enterPassword(password);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');
            cy.get(':nth-child(4) > .oxd-main-menu-item').click()
            cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
            cy.get('.oxd-dropdown-menu > :nth-child(3)').click()
            cy.get('.oxd-autocomplete-text-input > input').type('Md Masum Khondhoker Efaz')
            cy.xpath('//*[contains(@class,"oxd-autocomplete-dropdown")]/*[normalize-space(.)="Md Masum Khondhoker Efaz"]').click();
            cy.get('.oxd-date-wrapper>div>input').click();
            cy.xpath('//div[text()[contains(., "15")]]').click();
            cy.get('.oxd-form-actions > .oxd-button').click({ force: true });

            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        }),
        it('create timesheet for an employee normal', () => { //admin
            loginPage.enterUserName(username);
            loginPage.enterPassword(password);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');
            cy.get(':nth-child(4) > .oxd-main-menu-item').click()
            cy.get('.oxd-autocomplete-text-input > input').type('Md Masum Khondhoker Efaz')
            cy.xpath('//*[contains(@class,"oxd-autocomplete-dropdown")]/*[normalize-space(.)="Md Masum Khondhoker Efaz"]').click();
            cy.get('.oxd-form-actions > .oxd-button').click({ force: true });
            cy.get('.oxd-button--ghost').click()
            cy.get('.oxd-autocomplete-text-input > input').type('John')
            cy.xpath('//*[contains(@class,"oxd-autocomplete-dropdown")]/*[normalize-space(.)="John - Project1"]').click()
            cy.get('.oxd-select-text').click()
            cy.xpath('(//*[@role="option"]/span)[1]').click();
            cy.xpath('(//input)[3]').type('2');
            cy.xpath('(//input)[4]').type('2.5');
            cy.xpath('(//input)[5]').type('3');
            cy.xpath('(//input)[6]').type('4');
            cy.xpath('(//input)[7]').type('3');
            cy.get('.oxd-button--secondary').click()
            cy.contains('Successfully Saved').should('be.visible');
            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        }),

        it('submit timesheet for an employee normal', () => { //employee
            loginPage.enterUserName(username1);
            loginPage.enterPassword(password1);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');
            cy.get(':nth-child(2) > .oxd-main-menu-item').click()
            cy.get('.oxd-button--secondary').click()
            
            cy.contains('Timesheet Submitted').should('be.visible');
            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        }),
        it('approve timesheet for an employee normal', () => { //admin
            loginPage.enterUserName(username);
            loginPage.enterPassword(password);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');
            cy.get(':nth-child(4) > .oxd-main-menu-item').click()
            cy.get('.oxd-autocomplete-text-input > input').type('Md Masum Khondhoker Efaz')
            cy.xpath('//*[contains(@class,"oxd-autocomplete-dropdown")]/*[normalize-space(.)="Md Masum Khondhoker Efaz"]').click()
            cy.get('.oxd-form-actions > .oxd-button').click({ force: true })
            cy.get('.oxd-textarea').type('Good')
            cy.get('.oxd-button--success').click()
            
            cy.contains('Timesheet Approved').should('be.visible');
            
            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        }),

        it('attendance summary for an employee normal', () => { //admin
            loginPage.enterUserName(username);
            loginPage.enterPassword(password);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');
            cy.get(':nth-child(4) > .oxd-main-menu-item').click()
            cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
            cy.get('.oxd-dropdown-menu > :nth-child(3)').click()
            cy.get('.oxd-autocomplete-text-input > input').type('Md Masum Khondhoker Efaz')
            cy.xpath('//*[contains(@class,"oxd-autocomplete-dropdown")]/*[normalize-space(.)="Md Masum Khondhoker Efaz"]').click()
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
            cy.xpath('//*[@role="listbox"]/*[normalize-space(.)="HR Manager"]').click()
            cy.get('.oxd-button').click()
            
            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        }),

        it('attendance summary for an employee invalid', () => { //admin irregular
            loginPage.enterUserName(username);
            loginPage.enterPassword(password);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');
            cy.get(':nth-child(4) > .oxd-main-menu-item').click()
            cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
            cy.get('.oxd-dropdown-menu > :nth-child(3)').click()
            cy.get('.oxd-autocomplete-text-input > input').type('ezaz')
            
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
            cy.xpath('//*[@role="listbox"]/*[normalize-space(.)="HR Manager"]').click()
            cy.get('.oxd-button').click()
            
            cy.contains('Invalid').should('be.visible');

            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        })

})