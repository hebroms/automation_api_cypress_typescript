export class ServicePreferences {
    static generate() {
        return {
            paymentPix: Math.random() > 0.5,
            transactCard: Math.random() > 0.5,
            paymentBill: Math.random() > 0.5,
            tradeCryptoassets: Math.random() > 0.5,
            apiIntegration: Math.random() > 0.5
        };
    }
}
