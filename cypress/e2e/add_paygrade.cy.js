import { LogInPage } from "./pages/login_page"

const loginPage = new LogInPage()

const username = 'admin';
const password = 'Admin123#$%*'
// const random4CharString = Array.from({ length: 4 }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join('');
// const gradeName = random4CharString;

describe('Pay grade tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost/orangehrm-5.5/web/index.php/dashboard/index')
  })

  it('pay grade test 1', () => {
    loginPage.enterUserName(username);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
    cy.log("ok")


    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
    cy.get('.oxd-button').click()

    cy.get('div>.oxd-grid-item>*>div:nth-child(2)>input').type('g2');
    cy.get('[type="submit"]').click();
    cy.get('.orangehrm-action-header > .oxd-button').click()
    cy.get('.orangehrm-action-header > .oxd-button').click();
    cy.get('.oxd-select-text>div:nth-child(1)').click();
    cy.xpath('(//*[normalize-space(.)="BDT - Bangladeshi Taka"])[1]').click();
    cy.xpath('(//input)[3]').type('20000');
    cy.xpath('(//input)[4]').type('30000');
    cy.xpath('(//*[@type="submit"])[2]').click();

    cy.contains('Successfully Saved').should('be.visible');

    cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/admin/payGrade');

  })

})