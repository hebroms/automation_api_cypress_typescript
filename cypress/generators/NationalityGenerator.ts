import { NATIONALITIES } from "../data/nationalityData";

export class NationalityGenerator {
    static generate(isBrazilian?: boolean): string {
        if (isBrazilian !== undefined) {
            return isBrazilian ? NATIONALITIES.BRAZILIAN : NATIONALITIES.NON_BRAZILIAN;
        }
        return Math.random() < 0.5 ? NATIONALITIES.BRAZILIAN : NATIONALITIES.NON_BRAZILIAN;
    }
}
