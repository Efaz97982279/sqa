import { LogInPage } from "./pages/login_page";

const loginPage = new LogInPage();

const username = 'admin'
const password = 'Admin123#$%*'

const username1 = 'efaz11110'
const password1 = 'Efaz1234$'

describe('Leave application test', () => {

    beforeEach(() => {
        cy.visit('http://localhost/orangehrm-5.5/web/index.php/dashboard/index');
    });

    it('leave apply from a employer normal', () => { //emplyee
        loginPage.enterUserName(username1);
        loginPage.enterPassword(password1);
        loginPage.clickLogin();
        cy.log("Logged in successfully");

        cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');

        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(1)').click()
        cy.get('.oxd-select-text').click()
        cy.xpath('(//*[normalize-space(.)="Personal"])[1]').click()
        cy.xpath('(//*[contains(@class,"bi-calendar")])[1]').click();
        cy.xpath('//div/*[text()[contains(., "18")]]').click();
        cy.xpath('(//*[contains(@class,"bi-calendar")])[2]').click();
        cy.xpath('//*[text()[contains(., "19")]]').eq(1).click();
        cy.get('.oxd-button').click()

        cy.contains('Successfully Saved').should('be.visible');
        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

        cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

    }),

        it('searching pending approval of emplyees normal', () => {  //admin search for leave approval
            loginPage.enterUserName(username);
            loginPage.enterPassword(password);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');

            cy.get(':nth-child(3) > .oxd-main-menu-item').click()
            cy.xpath('(//*[contains(@class,"bi-caret-down-fill")])[3]').click({ force: true })
            cy.xpath('(//*[@role="option"]/span)[4]').click()
            cy.get('.oxd-autocomplete-text-input > input').type('Md Masum Khondhoker Efaz')
            cy.xpath('//*[contains(@class,"oxd-autocomplete-dropdown")]/*[normalize-space(.)="Md Masum Khondhoker Efaz"]').click();
            cy.get('[type="submit"]').click();
            cy.contains('.orangehrm-container', 'Md Masum Khondhoker Efaz').should('be.visible');

            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        }),

        it('admin approval normal', () => { // admin
            loginPage.enterUserName(username);
            loginPage.enterPassword(password);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');

            cy.get(':nth-child(3) > .oxd-main-menu-item').click()
            cy.xpath('(//*[contains(@class,"bi-caret-down-fill")])[3]').click({ force: true })
            cy.xpath('(//*[@role="option"]/span)[4]').click()
            cy.get('.oxd-autocomplete-text-input > input').type('Md Masum Khondhoker Efaz')
            cy.xpath('//*[contains(@class,"oxd-autocomplete-dropdown")]/*[normalize-space(.)="Md Masum Khondhoker Efaz"]').click();
            cy.get('.oxd-button--secondary').click()
            cy.get('.oxd-button--label-success').click()

            cy.contains('Successfully').should('be.visible');

            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        }),

        it('applied leave status from an employer interface normal', () => {//employee
            loginPage.enterUserName(username1);
            loginPage.enterPassword(password1);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');

            cy.get(':nth-child(1) > .oxd-main-menu-item').click()
            cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
            cy.get('.oxd-select-wrapper>div').click();
            cy.xpath('//span[text()[contains(., "Personal")]]').click();
            cy.get('[type="submit"]').click({ force: true });

            cy.contains('.orangehrm-container', 'Scheduled').should('be.visible');

            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        }),


        it('leave report for an employer normal', () => { //empoyee
            loginPage.enterUserName(username1);
            loginPage.enterPassword(password1);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');

            cy.get(':nth-child(2) > .oxd-main-menu-item').click()
            cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
            cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click()
            cy.get('.oxd-select-text').click()
            cy.get('.oxd-button').click()

            cy.contains('.oxd-report-table-header--pagination', 'Records Found').should('be.visible');

            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        }),



        it('assigning leave for an employee normal', () => {  //adminn
            loginPage.enterUserName(username);
            loginPage.enterPassword(password);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');

            cy.get(':nth-child(3) > .oxd-main-menu-item').click()
            cy.get('.oxd-topbar-body-nav > ul > :nth-child(6)').click()
            cy.get('.oxd-dropdown-menu > :nth-child(2) > li').click()

            cy.xpath('(//input)[2]').type('Md Masum Khondhoker Efaz');
            cy.xpath('//*[contains(@class,"oxd-autocomplete-dropdown")]/*[normalize-space(.)="Md Masum Khondhoker Efaz"]').click();
            cy.get('.oxd-select-text>div:nth-child(1)').click();
            cy.xpath('(//*[@role="option"])[3]').click();
            cy.xpath('(//*[@placeholder="yyyy-mm-dd"])[1]').click();
            cy.xpath('//*[text()[contains(., "28")]]').click();
            cy.xpath('(//*[@placeholder="yyyy-mm-dd"])[2]').click();
            cy.xpath('//*[text()[contains(., "31")]]').eq(1).click();
            cy.get('.oxd-button').click()

            cy.contains('Successfully Saved').should('be.visible');
            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        }),

        it('generating leave report for an employee normal', () => {  //admin
            loginPage.enterUserName(username);
            loginPage.enterPassword(password);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');

            cy.get(':nth-child(3) > .oxd-main-menu-item').click()
            cy.get('ul[data-v-5327b38a=""] > :nth-child(4)').click()
            cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
            cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click()
            cy.get('.oxd-autocomplete-text-input > input').click()
            cy.get('.oxd-autocomplete-wrapper>div>input').type('Md Masum Khondhoker Efaz');
            cy.xpath('//*[contains(@class,"oxd-autocomplete-dropdown")]/*[normalize-space(.)="Md Masum Khondhoker Efaz"]').click();
            cy.get('[type="submit"]').click();
            cy.contains('.oxd-report-table-header--pagination', 'Records Found').should('be.visible');

            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        }),
        // Irregular
        it('apply leave from an employee invalid', () => {  //employee
            loginPage.enterUserName(username1);
            loginPage.enterPassword(password1);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');

            cy.get(':nth-child(2) > .oxd-main-menu-item').click()
            cy.get('.oxd-topbar-body-nav > ul > :nth-child(1)').click()
            cy.get('.oxd-select-text').click()
            cy.xpath('(//*[@role="option"])[3]').click();
            cy.contains('5.00 Day(s)').should('be.visible');
            cy.xpath('(//*[@placeholder="yyyy-mm-dd"])[1]').click();
            cy.xpath('(//*[text()[contains(., "20")]])[3]').click();
            cy.xpath('(//*[contains(@class,"bi-calendar")])[2]').click();
            cy.xpath('//*[text()[contains(., "27")]]').eq(1).click();
            cy.contains('Balance not sufficient').should('be.visible');
            cy.get('.oxd-button').click()

            cy.contains('Error').should('be.visible');
            cy.contains('Leave Balance Exceeded').should('be.visible');
            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        })




});
