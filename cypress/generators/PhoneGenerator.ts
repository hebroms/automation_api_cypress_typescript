import { RandomNumberGenerator } from "./RandomNumberGenerator";

export class PhoneGenerator {
    static generate(): string {
        return RandomNumberGenerator.generateNumber(11);
    }
}