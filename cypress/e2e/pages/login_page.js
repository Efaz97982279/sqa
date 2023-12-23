
export class LogInPage {

    username_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
    password_textbos = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
    login_button = '.oxd-button';
    enterUserName = (username) => {
        cy.get(this.username_textbox).type(username)
    }
    enterPassword = (password) => {
        cy.get(this.password_textbos).type(password)
    }
    clickLogin = () => {
        cy.get(this.login_button).click()
    }

}