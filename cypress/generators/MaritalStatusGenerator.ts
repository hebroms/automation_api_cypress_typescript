import { MARITAL_STATUSES } from "../data/maritalStatusData";

export class MaritalStatusGenerator {
    static generate(): string {
        return MARITAL_STATUSES[Math.floor(Math.random() * MARITAL_STATUSES.length)];
    }
}
