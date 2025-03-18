import { CPFGenerator } from "../generators/CPFGenerator";
import { PhoneGenerator } from "../generators/PhoneGenerator";
import { faker } from "@faker-js/faker";

export class PersonalData {
    static generate() {
        return {
            fullName: faker.person.fullName(),
            document: CPFGenerator.generate(),
            email: faker.internet.email(),
            phone: PhoneGenerator.generate()
        };
    }
}