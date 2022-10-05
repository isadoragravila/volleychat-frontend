import { faker } from "@faker-js/faker";

const URL_FRONT = "http://localhost:3000";
const URL_BACK = "http://localhost:5000";

beforeEach(async () => {
	await cy.request("POST", `${URL_BACK}/e2e/reset`, {});
});

describe("Create chat", () => {
	it("should create chat successfully", () => {
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

		cy.createUserAndLogin(URL_BACK, user);

		cy.intercept("GET", `${URL_BACK}/categories`).as("categories");
		cy.intercept("GET", `${URL_BACK}/profile`).as("profile");

		cy.visit(`${URL_FRONT}/feed/1`);

		cy.wait("@categories");
		cy.wait("@profile");

		cy.get("[data-cy=createChat]").click();

		cy.get("[placeholder=Title]").type(chat.title);
		cy.get("[placeholder=Description]").type(chat.description);

		cy.intercept("POST", `${URL_BACK}/chats/create/1`).as("create");

		cy.get("[type=submit]").click();

		cy.wait("@create");

		cy.get("[data-cy=chatTitle]").contains(chat.title);

		cy.get("[data-cy=participants]").contains(user.username);
	});
});