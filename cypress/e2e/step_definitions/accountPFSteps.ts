import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AccountPFPage } from "../../pages/api/AccountPFPage";
import { API_ROUTES } from '../../settings/routes';

let page: AccountPFPage;
let response: Cypress.Response<any>;

Given('que possuo dados válidos de conta PF', () => {
  page = new AccountPFPage();
});

When('eu realizo a requisição de criação da conta PF', function () {
  page.createAccountPF(API_ROUTES.OPEN_ACCOUNT + API_ROUTES.ACCOUNT_PF, false).then((res) => {
    cy.wrap(res).as('response');
  });
});

Then('a conta deve ser criada com sucesso contendo o status {int}', function (statusCode: number) {
  cy.get('@response').then((res) => {
    page.validateCreateAccountPF(statusCode, res);
  });
});