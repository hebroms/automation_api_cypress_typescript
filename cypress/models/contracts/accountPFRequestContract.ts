import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

export const accountPFSchema = {
  type: "object",
  properties: {
    fullName: { type: "string" },
    document: { type: "string", pattern: "^[0-9]{11}$" },
    email: { type: "string", format: "email" },
    phone: { type: "string" },
    birthDate: { type: "string", format: "date-time" },
    bankData: {
      type: "object",
      properties: {
        bankCode: { type: "string" },
        bankName: { type: "string" },
        bankAgency: { type: "string" },
        accountNumber: { type: "string" },
        accountType: { type: "string", enum: ["CHECKING", "SAVINGS"] },
      },
      required: ["bankCode", "bankName", "bankAgency", "accountNumber", "accountType"],
    },
    preferencesServices: {
      type: "object",
      properties: {
        paymentPix: { type: "boolean" },
        transactCard: { type: "boolean" },
        paymentBill: { type: "boolean" },
        apiIntegration: { type: "boolean" },
      },
    },
    documents: {
      type: "array",
      items: {
        type: "object",
        properties: {
          documentType: { type: "string", enum: ["IDENTITY_DOCUMENT", "PROOF_OF_ADDRESS", "SELFIE_WITH_IDENTITY_DOCUMENT"] },
          file: { type: "string" },
          name: { type: "string" },
          mimeType: { type: "string", pattern: "^image/.+$" },
        },
        required: ["documentType", "file", "name", "mimeType"],
      },
    },
  },
  required: ["fullName", "document", "email", "phone", "birthDate", "bankData", "preferencesServices", "documents"],
};

export function validateAccountPFResponse(response: any) {
  const validate = ajv.compile(accountPFSchema);
  const valid = validate(response);
  if (!valid) {
    console.error("Erro no contrato:", validate.errors);
    throw new Error("A resposta da API não está em conformidade com o contrato esperado.");
  }
}
