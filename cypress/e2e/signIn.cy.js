import { faker } from "@faker-js/faker";

const URL_FRONT = "http://localhost:3000";
const URL_BACK = "http://localhost:5000";

beforeEach(async () => {
    await cy.request("POST", `${URL_BACK}/e2e/reset`, {});
});

describe('Register page', () => {
    it('should login successfully', () => {
        const user = {
            username: faker.internet.userName(),
            password: faker.internet.password(10),
            email: faker.internet.email(),
            image: faker.internet.avatar(),
            bio: faker.lorem.sentences(2)
        };

        cy.createUser(URL_BACK, user);

        cy.visit(`${URL_FRONT}`);

        cy.get("[placeholder=username]").type(user.username);
        cy.get("[placeholder=password]").type(user.password);

        cy.intercept("POST", `${URL_BACK}/sign-in`).as("signIn");

        cy.get("[type=submit]").click();

        cy.wait("@signIn");

        cy.url().should('equal', `${URL_FRONT}/feed`);

    });

    it("should navigate to register page", () => {
        cy.visit(`${URL_FRONT}`);

        cy.get("[data-cy=goToRegister]").click();

        cy.url().should('equal', `${URL_FRONT}/sign-up`);
    })
});