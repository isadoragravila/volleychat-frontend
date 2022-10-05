import { faker } from "@faker-js/faker";

const URL_FRONT = "http://localhost:3000";
const URL_BACK = "http://localhost:5000";

beforeEach(async () => {
	await cy.request("POST", `${URL_BACK}/e2e/reset`, {});
});

describe("Chatroom", () => {
	it("should send messages successfully", () => {
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

		const message = {
			content: faker.lorem.words()
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

		cy.get("[type=text]").type(message.content);

		cy.get("[type=submit]").click();

		cy.get("[data-cy=message]").contains(message.content);
		cy.get("[data-cy=username]").contains(user.username);
	});
});