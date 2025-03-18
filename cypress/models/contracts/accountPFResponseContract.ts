import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

export const accountPFSchema = {
  type: "object",
  properties: {
    code: { type: "number" },
    success: { type: "boolean" },
    message: { type: "string" },
    data: { type: "string" },
  }
};

export function validateAccountPFResponse(response: any) {
  const validate = ajv.compile(accountPFSchema);
  const valid = validate(response);
  if (!valid) {
    console.error("Erro no contrato:", validate.errors);
    throw new Error("A resposta da API não está em conformidade com o contrato esperado.");
  }
}
