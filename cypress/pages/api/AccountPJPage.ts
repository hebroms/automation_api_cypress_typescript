import { AccountPJ } from "../../models/AccountPJ";

export class AccountPJPage {
  private accountData: AccountPJ;

  constructor() {
      this.accountData = new AccountPJ();
  }

  /**
   * Método genérico para criar uma conta PJ (válida ou inválida)
   * @param url Endpoint da API
   * @param overrideData Dados opcionais para sobrescrever
   */
  createAccountPJ(url: string, overrideData?: Partial<AccountPJ>) {
      return cy.wrap(this.accountData.generateValidAccount()).then((payload) => {
          if (overrideData) {
              payload = { ...payload, ...overrideData };
          }

          console.log("Payload enviado para criação da conta PJ:", JSON.stringify(payload, null, 2));

          return cy.api({
              method: 'POST',
              url: url,
              failOnStatusCode: false,
              headers: { 'Content-Type': 'application/json' },
              body: payload,
          });
      });
  }

  validateCreateAccountPJ(statusCode: number, response: Cypress.Response<any>) {
    if (!response) {
        throw new Error("Response está undefined!");
    }

    expect(response.status).to.eq(statusCode);
    expect(response.body.success).to.be.true;
    expect(response.body).to.have.property("success", true);
    expect(response.body).to.have.property("message", "Ok");
    expect(response.body).to.have.property("data", "Success");
  }
}
