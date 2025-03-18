import { AccountPF } from "../../models/AccountPF";
import { validateAccountPFResponse } from "../../models/contracts/accountPFResponseContract";

export class AccountPFPage {
  private accountData: AccountPF;

  constructor() {
      this.accountData = new AccountPF();
  }

  /**
   * Método genérico para criar uma conta PF (válida ou inválida)
   * @param url Endpoint da API
   * @param overrideData Dados opcionais para sobrescrever
   * @param isBrazilian Define se a pessoa é brasileira ou não.
   */
  createAccountPF(url: string, isOver18: boolean, isBrazilian?: boolean, overrideData?: Partial<AccountPF>) {
      return cy.wrap(this.accountData.generateValidAccount(isOver18)).then((payload) => {
          if (overrideData) {
              payload = { ...payload, ...overrideData };
          }

          console.log("Payload enviado para criação da conta PF:", JSON.stringify(payload, null, 2));

          return cy.api({
              method: 'POST',
              url: url,
              failOnStatusCode: false,
              headers: { 'Content-Type': 'application/json' },
              body: payload,
          });
      });
  }

  validateCreateAccountPF(statusCode: number, response: Cypress.Response<any>) {
    if (!response) {
        throw new Error("Response está undefined!");
    }

    expect(response.status).to.eq(statusCode);
    expect(response.body.success).to.be.true;
    expect(response.body).to.have.property("success", true);
    expect(response.body).to.have.property("message", "Ok");
    expect(response.body).to.have.property("data", "Success");
    validateAccountPFResponse(response.body);
  }
}
