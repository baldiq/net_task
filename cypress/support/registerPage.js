Cypress.Commands.add("getUsernameInput", () => cy.get('[name=username]'))

Cypress.Commands.add("getPasswordFirstInput", () => cy.get('#pw1'))

Cypress.Commands.add("getPasswordSecondInput", () => cy.get('#pw2'))

Cypress.Commands.add("visitRegistrationForm", () => cy.get('.lbut').click())

Cypress.Commands.add("getErrorDiv", () => cy.get('.fb'))

Cypress.Commands.add("submitRegistration", () => cy.get('.minw').click())


Cypress.Commands.add("enterUsername", (username) => {
	cy.getUsernameInput()
	  .type(username)
})

Cypress.Commands.add("enterPassword", (password) => {
	cy.getPasswordFirstInput()
	  .type(password)
	cy.getPasswordSecondInput()
	  .type(password)
})

