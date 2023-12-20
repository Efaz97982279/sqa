import { LogInPage } from "./pages/login_page"

const loginPage = new LogInPage()

const username = 'admin';
const password = 'Admin123#$%*'
const shift_name = 'night2'


describe('Adding work shifts', () => {

    beforeEach(() => {
        cy.visit('http://localhost/orangehrm-5.5/web/index.php/dashboard/index')
    })

    it('Add work shifts', () => {
        loginPage.enterUserName(username);
        loginPage.enterPassword(password);
        loginPage.clickLogin();
        cy.log("ok")


        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()

        cy.get('.oxd-dropdown-menu > :nth-child(5)').click()

        cy.get('.oxd-button').click()

        cy.get('div>.oxd-grid-item>*>div:nth-child(2)>input').type(shift_name);
        cy.xpath('(//*[@placeholder="hh:mm"])[1]').click();
        cy.xpath('(//*[@role="none"])[2]').click();
        cy.xpath('(//*[@placeholder="hh:mm"])[2]').click();
        cy.xpath('(//*[@role="none"])[3]').click();
        cy.xpath('(//*[@role="none"])[2]').click();
        cy.xpath('(//*[@placeholder="hh:mm"])[2]').click();
        cy.xpath('(//input)[5]').type('Md Masum Khondhoker Efaz');
        cy.xpath('//*[contains(@class,"oxd-autocomplete-dropdown")]/*[normalize-space(.)="Md Masum Khondhoker Efaz"]').click();
        cy.get('[type="submit"]').click();

        cy.contains('Successfully Saved').should('be.visible');

        cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/admin/workShift'); // Adjust based on the actual URL path

    })



})