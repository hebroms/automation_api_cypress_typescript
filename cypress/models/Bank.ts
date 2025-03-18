import { getRandomBank } from '../generators/BankAccountGenerator';

export interface BankData {
  bankCode: string;
  bankName: string;
  bankAgency: string;
  accountNumber: string;
  accountType: 'CHECKING' | 'SAVINGS';
}

export function generateBankData(): BankData {
  const bank = getRandomBank();
  return {
    bankCode: bank.code,
    bankName: bank.name,
    bankAgency: Math.floor(1000 + Math.random() * 9000).toString(), // Agência de 4 dígitos
    accountNumber: Math.floor(10000 + Math.random() * 90000).toString(), // Conta com 5 dígitos
    accountType: Math.random() > 0.5 ? 'CHECKING' : 'SAVINGS',
  };
}
