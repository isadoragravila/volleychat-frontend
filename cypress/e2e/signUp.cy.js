import { faker } from "@faker-js/faker";

const URL_FRONT = "http://localhost:3000";
const URL_BACK = "http://localhost:5000";

beforeEach(async () => {
	await cy.request("POST", `${URL_BACK}/e2e/reset`, {});
});

describe("Register page", () => {
	it("should add user successfully", () => {
		const user = {
			username: faker.internet.userName(),
			password: faker.internet.password(10),
			email: faker.internet.email(),
			image: faker.internet.avatar(),
			bio: faker.lorem.sentences(2)
		};

		cy.visit(`${URL_FRONT}/sign-up`);

		cy.get("[placeholder=username]").type(user.username);
		cy.get("[placeholder=password]").type(user.password);
		cy.get("[placeholder=email]").type(user.email);
		cy.get("[placeholder=imageUrl]").type(user.image);
		cy.get("[placeholder=bio]").type(user.bio);

		cy.intercept("POST", `${URL_BACK}/sign-up`).as("signUp");

		cy.get("[type=submit]").click();

		cy.wait("@signUp");

		cy.url().should("equal", `${URL_FRONT}/`);

	});

	it("should navigate to login page", () => {
		cy.visit(`${URL_FRONT}/sign-up`);

		cy.get("[data-cy=goToLogin]").click();

		cy.url().should("equal", `${URL_FRONT}/`);
	});
});