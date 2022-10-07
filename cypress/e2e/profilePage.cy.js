import { faker } from "@faker-js/faker";

const URL_FRONT = "http://localhost:3000";
const URL_BACK = "http://localhost:5000";

beforeEach(async () => {
	await cy.request("POST", `${URL_BACK}/e2e/reset`, {});
});

describe("Chat feed", () => {
	it("should get chats by creator successfully", () => {
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

		cy.visit(`${URL_FRONT}/profile/1`);

		cy.wait("@categories");
		cy.wait("@profile");

		cy.get("[data-cy=username]").contains(user.username);
		cy.get("[data-cy=chatTitle]").contains(chat.title);
		cy.get("[data-cy=chatDescription]").contains(chat.description);
	});

	it("should navigate from profile page to chatroom", () => {
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

		cy.visit(`${URL_FRONT}/profile/1`);

		cy.wait("@categories");
		cy.wait("@profile");

		cy.get("[data-cy=join]").click();

		cy.get("[data-cy=chatTitle]").contains(chat.title);
		cy.get("[data-cy=participants]").contains(user.username);
	});
});