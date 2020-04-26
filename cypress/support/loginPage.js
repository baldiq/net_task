Cypress.Commands.add("getErrorDiv", () => cy.get('.fb'))

Cypress.Commands.add("nicknameInput", () => cy.get('[name=username]'))

Cypress.Commands.add("getPasswordInput", () => cy.get('[type=password]'))

Cypress.Commands.add("submitForm", () => cy.get('.fw > :nth-child(4) > .bxpad').click())

Cypress.Commands.add("login", (email, password) => {
	cy.nicknameInput()
	  .type(email)
	cy.getPasswordInput()
	  .type(password)
})