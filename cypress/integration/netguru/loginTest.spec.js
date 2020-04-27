

  const username = Cypress.env('username')
  const password = Cypress.env('password')


context('Recruiment Task', () => {
  beforeEach(() => {

  	cy.clearCookies()
  	cy.clearLocalStorage()
	cy.visit('/')
})

describe('The logging test', () => {
		it('Should not log in using wrong credetials', () => {

			cy.getUsernameInput()
			  .should('be.visible')
			  .clear()
			cy.getPasswordInput()
			  .should('be.visible')
			  .should('have.attr', 'type', 'password')
			cy.login(username, password)
			cy.submitForm() 
			cy.getErrorDiv()
			  .should('have.text', 'nieprawidłowa nazwa użytkownika lub hasło')
			cy.getPasswordInput()
			  .should('be.empty')

		})
	})
})		