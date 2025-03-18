import { CNPJGenerator } from "../generators/CNPJGenerator";
import { faker } from "@faker-js/faker";

export class CompanyData {
    static generate() {
        return {
            documentCnpj: CNPJGenerator.generate(),
            companyName: faker.company.name()
        };
    }
}