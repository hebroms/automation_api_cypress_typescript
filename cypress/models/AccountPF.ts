import { PersonalData } from "./Personal";
import { BirthDateGenerator } from '../generators/BirthDateGenerator';
import { generateBankData } from "./Bank";
import { ServicePreferences } from "./ServicePreferences";
import { DocumentDataPF } from "./Document";
import { NationalityGenerator } from "../generators/NationalityGenerator";
import { MaritalStatusGenerator } from "../generators/MaritalStatusGenerator";

export class AccountPF {
    private payload: any;

    constructor() {
        this.payload = {};
    }

    /**
     * Gera os dados válidos para uma conta PF no formato esperado
     */
    public async generateValidAccount(isUnder18: boolean = false, isBrazilian?: boolean) {
        const personalData = PersonalData.generate();
        const birthDateData = isUnder18 ? BirthDateGenerator.generateUnder18() : BirthDateGenerator.generateOver18();
        const bankData = generateBankData();
        const preferenceServices = ServicePreferences.generate();
        const documents = await DocumentDataPF.generate();
        const nationality = NationalityGenerator.generate(isBrazilian);
        const maritalStatus = MaritalStatusGenerator.generate();

        // Desestrutura os objetos para remover os níveis extras
        this.payload = {
            fullName: personalData.fullName,
            document: personalData.document,
            birthDate: birthDateData,
            email: personalData.email,
            phone: personalData.phone,
            nationality: nationality,
            maritalStatus: maritalStatus,
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
                tradeCryptoassets: preferenceServices.tradeCryptoassets,
                apiIntegration: preferenceServices.apiIntegration,
            },
            documents: documents,
        };

        return this.payload;
    }

    /**
     * Exibe o payload no console para debugging
     */
    public logPayload() {
        console.log("Payload enviado para criação da conta PF:", JSON.stringify(this.payload, null, 2));
    }
}
