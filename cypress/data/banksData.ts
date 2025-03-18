export const banks = [
    { code: '001', name: 'Banco do Brasil' },
    { code: '033', name: 'Santander' },
    { code: '104', name: 'Caixa Econômica Federal' },
    { code: '237', name: 'Bradesco' },
    { code: '341', name: 'Itaú' },
    { code: '399', name: 'HSBC' },
    { code: '077', name: 'Banco Inter' },
    { code: '260', name: 'Nubank' },
    { code: '290', name: 'PagBank' },
    { code: '323', name: 'Mercado Pago' },
  ];
  
  /**
   * Retorna um banco aleatório da lista
   */
  export function getRandomBank() {
    const randomIndex = Math.floor(Math.random() * banks.length);
    return banks[randomIndex];
  }
  