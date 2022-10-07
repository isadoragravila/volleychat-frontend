import { faker } from "@faker-js/faker";

const URL_FRONT = "http://localhost:3000";
const URL_BACK = "http://localhost:5000";

beforeEach(async () => {
	await cy.request("POST", `${URL_BACK}/e2e/reset`, {});
});

describe("Header", () => {
	it("should navigate to feed when clicking in the logo", () => {
		const user = {
			username: faker.internet.userName(),
			password: faker.internet.password(10),
			email: faker.internet.email(),
			image: faker.internet.avatar(),
			bio: faker.lorem.sentences(2)
		};

		cy.createUserAndLogin(URL_BACK, user);

		cy.intercept("GET", `${URL_BACK}/categories`).as("categories");
		cy.intercept("GET", `${URL_BACK}/profile`).as("profile");

		cy.visit(`${URL_FRONT}/feed`);

		cy.wait("@categories");
		cy.wait("@profile");

		cy.get("[data-cy=logo]").eq(0).click();

		cy.url().should("equal", `${URL_FRONT}/feed`);
	});

	it("should logout, navigating to login page", () => {
		const user = {
			username: faker.internet.userName(),
			password: faker.internet.password(10),
			email: faker.internet.email(),
			image: faker.internet.avatar(),
			bio: faker.lorem.sentences(2)
		};

		cy.createUserAndLogin(URL_BACK, user);

		cy.intercept("GET", `${URL_BACK}/categories`).as("categories");
		cy.intercept("GET", `${URL_BACK}/profile`).as("profile");

		cy.visit(`${URL_FRONT}/feed`);

		cy.wait("@categories");
		cy.wait("@profile");

		cy.get("[data-cy=logout]").click();

		cy.url().should("equal", `${URL_FRONT}/`);
	});

	it("should navigate to profile page os user when clicking in the image", () => {
		const user = {
			username: faker.internet.userName(),
			password: faker.internet.password(10),
			email: faker.internet.email(),
			image: faker.internet.avatar(),
			bio: faker.lorem.sentences(2)
		};

		cy.createUserAndLogin(URL_BACK, user);

		cy.intercept("GET", `${URL_BACK}/categories`).as("categories");
		cy.intercept("GET", `${URL_BACK}/profile`).as("profile");

		cy.visit(`${URL_FRONT}/feed`);

		cy.wait("@categories");
		cy.wait("@profile");

		cy.get("[data-cy=image]").click();

		cy.get("[data-cy=username]").contains(user.username);

		cy.url().should("equal", `${URL_FRONT}/profile/1`);
	});
});