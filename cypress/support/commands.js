// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("createUser", (URL_BACK, user) => {

	cy.request("POST", `${URL_BACK}/sign-up`, user);
});

Cypress.Commands.add("createUserAndLogin", (URL_BACK, user) => {
	cy.request("POST", `${URL_BACK}/sign-up`, user).then(() => {
		cy.request("POST", `${URL_BACK}/sign-in`, {
			username: user.username,
			password: user.password
		}).then(res => {
			window.localStorage.setItem("token", res.body.token);
			return res.body.token;
		});
	});
});

Cypress.Commands.add("createChat", (URL_BACK, chat, token) => {
	const options = {
		method: "POST",
		url: `${URL_BACK}/chats/create/1`,
		auth: {
			"bearer": `${token}`,
		},
		body: chat
	};
	cy.request(options);
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })