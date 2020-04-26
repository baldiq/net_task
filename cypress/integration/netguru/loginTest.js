
// Lets define username and password // 

let username = 'login'
let password = 'testpass'


context('Recruiment Task', () => {
  beforeEach(() => {
  	// Clean Cookies and Local Storage
  	// It could be helpful in case of running another tests
  	// It will log out of the app, if user was logged previously
  	cy.clearCookies()
  	cy.clearLocalStorage()
  	// '/' refers to baseUrl, cypress.json
	cy.visit('/')
})

describe('The logging test', () => {
		it('Should not log in using wrong credetials', () => {
			// Steps to make:
			// Get login input, enter the username
			// Get password input, enter the password
			// Submit the form
			// Get <p> tag and check it's text
			// Check if password input has cleared after submission
			cy.login(username, password)
			cy.submitForm() 
			cy.getErrorDiv()
			  .should('have.text', 'nieprawidłowa nazwa użytkownika lub hasło')
			cy.getPasswordInput()
			  .should('be.empty')

		})
	})
})		