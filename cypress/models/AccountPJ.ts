import { PersonalData } from "./Personal";
import { CompanyData } from "./Company";
import { generateBankData } from "./Bank";
import { ServicePreferences } from "./ServicePreferences";
import { DocumentDataPJ } from "./Document";

export class AccountPJ {
    private payload: any;

    constructor() {
        this.payload = {};
    }

    /**
     * Gera os dados válidos para uma conta PJ no formato esperado
     */
    public async generateValidAccount() {
        const personalData = PersonalData.generate();
        const companyData = CompanyData.generate();
        const bankData = generateBankData();
        const preferenceServices = ServicePreferences.generate();
        const documents = await DocumentDataPJ.generate();

        // Desestrutura os objetos para remover os níveis extras
        this.payload = {
            fullName: personalData.fullName,
            document: personalData.document,
            email: personalData.email,
            phone: personalData.phone,
            companyData: {
                documentCnpj: companyData.documentCnpj,
                companyName: companyData.companyName,
            },
            bankData: {
                bankCode: bankData.bankCode,
                bankName: bankData.bankName,
                bankAgency: bankData.bankAgency,
                accountNumber: bankData.accountNumber,
                accountType: bankData.accountType,
            },
            preferencesServices: {
                paymentPix: preferenceServices.paymentPix,
                transactCard: preferenceServices.transactCard,
                paymentBill: preferenceServices.paymentBill,
                apiIntegration: preferenceServices.apiIntegration,
            },
            documents: documents,documents,documents
        };

        return this.payload;
    }

    /**
     * Exibe o payload no console para debugging
     */
    public logPayload() {
        console.log("Payload enviado para criação da conta PJ:", JSON.stringify(this.payload, null, 2));
    }
}
