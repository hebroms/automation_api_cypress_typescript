export class RandomNumberGenerator {
    static generateNumber(digits: number): string {
        return Math.floor(Math.pow(10, digits - 1) + Math.random() * 9 * Math.pow(10, digits - 1)).toString();
    }
}