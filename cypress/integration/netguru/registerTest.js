
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

describe('The register test', () => {
		it('Should display a message when username is taken', () => {
			// Here are the steps to do:
			// - Go to registation form
			// - Get nickname input field and enter username
			// - Check if nickname was entered properly
			// - Get password inputs and enter the same password
			// - Submit the form
			// - Get <p> tag and check it's text
			cy.visitRegistrationForm()
			cy.enterUsername(username)
			  .should('have.value', username)
			cy.enterPassword(password)
			cy.submitRegistration()
			cy.getErrorDiv()
			  .should('have.text', '(' + username + ') wybrana nazwa jest już zajęta; dodaj jakieś cyfry lub coś')
		})
	})
})		