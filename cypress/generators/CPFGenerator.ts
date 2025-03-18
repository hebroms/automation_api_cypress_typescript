export class CPFGenerator {
    static generate(): string {
        let n = () => Math.floor(Math.random() * 9);
        let cpfBase = Array.from({ length: 9 }, n).join("");
        let d1 = this.calculateDigit(cpfBase, 10);
        let d2 = this.calculateDigit(cpfBase + d1, 11);
        return cpfBase + d1 + d2;
    }

    private static calculateDigit(base: string, multipliers: number): number {
        let sum = base.split("").map((num, idx) => parseInt(num) * (multipliers - idx)).reduce((acc, curr) => acc + curr, 0);
        let remainder = sum % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    }
}