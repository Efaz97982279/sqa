import { LogInPage } from "./pages/login_page"

const loginPage = new LogInPage()

const username = 'admin';
const password = 'Admin123#$%*'

const username1 = 'efaz11110'
const password1 = 'Efaz1234$'
let EmployeeId;

describe('Adding an employee', () => { //admin

    beforeEach(() => {
        cy.visit('http://localhost/orangehrm-5.5/web/index.php/dashboard/index')
    })

    it('Add employee test normal', () => {

        loginPage.enterUserName(username);
        loginPage.enterPassword(password);
        loginPage.clickLogin();
        cy.log("ok")

        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()


        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('abcd')
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Mr.')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("John")
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').then((element) => {
            EmployeeId = element.val().trim();  // Extract employee ID from the input field
            cy.log(`Generated Employee ID: ${EmployeeId}`);
        });

        cy.get('.oxd-switch-input').click()
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('john12347')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(password1)
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password1)
        cy.get('.oxd-button--secondary').click()
        cy.log('Added')

        cy.contains('Successfully Saved').should('be.visible')

        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

        cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');


    }),
        it('Add employee information normal', () => { //admin

            loginPage.enterUserName(username);
            loginPage.enterPassword(password);
            loginPage.clickLogin();
            cy.log("ok")

            cy.get(':nth-child(2) > .oxd-main-menu-item').click()
            cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
            cy.get(':nth-child(2) > .oxd-input').type('0023')
            cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true })
            cy.get('[type="submit"]').click()
            cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
            cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click();
            cy.xpath('//*[text()[contains(., "2000")]]').click();
            cy.xpath('//*[text()[contains(., "September")]]').click();
            cy.get('div>div:nth-child(1)>.oxd-calendar-date').click({ force: true });
            cy.get('[type="submit"]').click();
            cy.contains('Successfully Updated').should('be.visible')

            //job
            cy.get(':nth-child(6) > .orangehrm-tabs-item').click();
            cy.get('.oxd-date-wrapper>div>input').click();
            cy.get('.bi-chevron-right').click();
            cy.get('div>div:nth-child(1)>.oxd-calendar-date').click();
            cy.xpath('(//*[text()[contains(., "-- Select --")]])[1]').click({ force: true });
            // cy.xpath('(//*[@role="option"]/span)[4]').click();
            cy.xpath('(//*[normalize-space(.)="-- Select --"])[3]').click();
            cy.xpath('//*[text()[contains(., "Professionals")]]').click({ force: true });
            cy.xpath('(//*[text()[contains(., "-- Select --")]])[3]').click({ force: true });
            // cy.xpath('(//*[@role="option"])[2]').click();
            cy.get('[type="submit"]').click();
            cy.contains('Successfully Updated').should('be.visible')

            //Salary
            cy.get(':nth-child(7) > .orangehrm-tabs-item').click()
            cy.xpath('(//*[text()[contains(., "Add")]])[2]').click({ force: true });
            cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Total');
            cy.xpath('(//*[text()[contains(., "-- Select --")]])[1]').click({ force: true });
            cy.xpath('(//*[@role="option"])[4]').click();
            cy.xpath('(//*[text()[contains(., "-- Select --")]])[1]').click({ force: true });
            cy.xpath('(//*[@role="option"]/span)[4]').click();
            cy.xpath('//*[text()[contains(., "-- Select --")]]').click({ force: true });
            cy.get('[role="option"]>span').click();
            cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('40000');
            cy.get('[type="submit"]').click({ force: true });
            cy.contains('Successfully Saved').should('be.visible')

            //Report to
            cy.get(':nth-child(8) > .orangehrm-tabs-item').click()
            cy.get(':nth-child(3) > :nth-child(1) > .orangehrm-action-header > .oxd-button').click()
            cy.get('.oxd-autocomplete-text-input > input').type('Md Masum Khondhoker Efaz');
            cy.xpath('//*[contains(@class,"oxd-autocomplete-dropdown")]/*[normalize-space(.)="Md Masum Khondhoker Efaz"]').click();
            cy.xpath('//*[text()[contains(., "-- Select --")]]').click()
            cy.xpath('(//*[normalize-space(.)="Direct"])[1]').click()
            cy.get('.oxd-button--secondary').click()
            cy.contains('Successfully Saved').should('be.visible')


            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');
        }),

        it('employee login & add info normal', () => { //emplyee
            loginPage.enterUserName(username1);
            loginPage.enterPassword(password1);
            loginPage.clickLogin();
            cy.log("Logged in successfully");

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php');

            cy.get(':nth-child(3) > .oxd-main-menu-item').click()
            cy.xpath('(//*[text()[contains(., "-- Select --")]])[1]').click();
            cy.xpath('(//*[normalize-space(.)="Bangladeshi"])[1]').click();
            cy.xpath('(//*[normalize-space(.)="-- Select --"])[3]').click();
            cy.xpath('(//*[@role="option"])[2]').click();
            cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label').click();
            cy.get('.oxd-form-actions > .oxd-button').click()

            cy.contains('Successfully Updated').should('be.visible');

            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');

        }),
        it('Employee terminate normal', () => { //admin

            loginPage.enterUserName(username);
            loginPage.enterPassword(password);
            loginPage.clickLogin();
            cy.log("ok")
            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php')

            cy.get(':nth-child(2) > .oxd-main-menu-item').click()
            cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
            cy.get(':nth-child(2) > .oxd-input').type('0013')
            cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true })
            cy.get('[type="submit"]').click()
            cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
            cy.get(':nth-child(6) > .orangehrm-tabs-item').click()
            cy.get(':nth-child(3) > .orangehrm-action-header > .oxd-button').click()
            cy.xpath('(//*[@placeholder="yyyy-mm-dd"])[2]').click();
            cy.xpath('//*[text()[contains(., "27")]]').click();
            cy.get('.oxd-form > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click({ force: true });
            cy.xpath('//*[@role="listbox"]/*[normalize-space(.)="Dismissed"]').click();
            cy.get('textarea').type('Good bye');
            cy.get('.oxd-sheet > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click()
            cy.contains('Successfully Updated').should('be.visible');

            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');


        }),

        it('Add employee test invalid', () => { //admin

            loginPage.enterUserName(username);
            loginPage.enterPassword(password);
            loginPage.clickLogin();
            cy.log("ok")
    
            cy.get(':nth-child(2) > .oxd-main-menu-item').click()
            cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
    
    
            cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Mr.')
            cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('John')
            cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Bob')
            cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
            cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('0023')
    
            cy.get('.oxd-button--secondary').click()
            cy.log('Added')
    
            cy.contains('Employee Id already exists').should('be.visible')
    
            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    
            cy.url().should('include', 'http://localhost/orangehrm-5.5/web/index.php/auth/login');
    
    
        })
})

