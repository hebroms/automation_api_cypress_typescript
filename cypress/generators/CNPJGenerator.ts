export class CNPJGenerator {
    static generate(): string {
        let n = () => Math.floor(Math.random() * 9);
        let cnpjBase = Array.from({ length: 12 }, n).join("");
        let d1 = this.calculateDigit(cnpjBase, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
        let d2 = this.calculateDigit(cnpjBase + d1, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
        return cnpjBase + d1 + d2;
    }

    private static calculateDigit(base: string, multipliers: number[]): number {
        let sum = base.split("").map((num, idx) => parseInt(num) * multipliers[idx]).reduce((acc, curr) => acc + curr, 0);
        let remainder = sum % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    }
}