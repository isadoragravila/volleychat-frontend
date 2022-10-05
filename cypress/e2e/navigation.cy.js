import { faker } from "@faker-js/faker";

const URL_FRONT = "http://localhost:3000";
const URL_BACK = "http://localhost:5000";

beforeEach(async () => {
	await cy.request("POST", `${URL_BACK}/e2e/reset`, {});
});

describe("Navigate between pages", () => {
	it("should navigate from feed to chat feed", () => {
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

		cy.get("[data-cy=category]").eq(0).click();

		cy.wait("@categories");

		cy.get("[data-cy=category]").eq(0).then(title => {
			const txt = title.text();

			cy.get("[data-cy=categoryTitle]").contains(txt);
		});

		cy.url().should("equal", `${URL_FRONT}/feed/1`);
	});

	it("should navigate from chat feed to feed", () => {
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

		cy.visit(`${URL_FRONT}/feed/1`);

		cy.wait("@categories");
		cy.wait("@profile");

		cy.get("[data-cy=return]").click();

		cy.wait("@categories");

		cy.url().should("equal", `${URL_FRONT}/feed`);
	});

	it("should navigate from chat feed to chatroom and then back to chat feed", () => {
		const user = {
			username: faker.internet.userName(),
			password: faker.internet.password(10),
			email: faker.internet.email(),
			image: faker.internet.avatar(),
			bio: faker.lorem.sentences(2)
		};

		const chat = {
			title: faker.lorem.words(2),
			description: faker.lorem.sentences(2)
		};

		cy.createUserAndLogin(URL_BACK, user).then(token => {
			cy.createChat(URL_BACK, chat, token);
		});

		cy.intercept("GET", `${URL_BACK}/categories`).as("categories");
		cy.intercept("GET", `${URL_BACK}/profile`).as("profile");

		cy.visit(`${URL_FRONT}/feed/1`);

		cy.wait("@categories");
		cy.wait("@profile");

		cy.get("[data-cy=join]").click();

		cy.get("[data-cy=chatTitle]").contains(chat.title);
		cy.get("[data-cy=participants]").contains(user.username);

		cy.get("[data-cy=leaveRoom]").click();

		cy.url().should("equal", `${URL_FRONT}/feed/1`);
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
});