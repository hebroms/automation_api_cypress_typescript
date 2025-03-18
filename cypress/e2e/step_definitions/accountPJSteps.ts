import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AccountPJPage } from "../../pages/api/AccountPJPage";
import { API_ROUTES } from '../../settings/routes';

let page: AccountPJPage;
let response: Cypress.Response<any>;

Given('que possuo dados válidos de conta PJ', () => {
  page = new AccountPJPage();
});

When('eu realizo a requisição de criação da conta PJ', function () {
  page.createAccountPJ(API_ROUTES.OPEN_ACCOUNT + API_ROUTES.ACCOUNT_PJ).then((res) => {
    cy.wrap(res).as('response'); // Armazena a resposta corretamente no Cypress
  });
});

Then('a resposta deve conter o status {int}', function (statusCode: number) {
  cy.get('@response').then((res) => {
    page.validateCreateAccountPJ(statusCode, res);
  });
});