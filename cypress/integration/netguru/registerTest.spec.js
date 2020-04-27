
  const username = Cypress.env('username')
  const password = Cypress.env('password')


context('Recruiment Task', () => {
  beforeEach(() => {

  	cy.clearCookies()
  	cy.clearLocalStorage()
	cy.visit('/')
})

describe('The register test', () => {
		it('Should display a message when username is taken', () => {

			cy.visitRegistrationForm()
			cy.getUsernameInput()
			  .should('be.visible')			
			  .clear()
			cy.enterUsername(username)
			  .should('have.value', username)
			cy.getPasswordFirstInput()
			  .should('have.attr', 'type', 'password')
			  .should('be.visible')
			  .clear()
			cy.getPasswordSecondInput()
			  .should('have.attr', 'type', 'password')
			  .should('be.visible')
			  .clear()
			cy.enterPassword(password)
			cy.submitRegistration()
			cy.getErrorDiv()
			  .should('have.text', '(' + username + ') wybrana nazwa jest już zajęta; dodaj jakieś cyfry lub coś')
		})
	})
})		

