import { faker } from '@faker-js/faker';

export class BirthDateGenerator {
  // Gera uma data para menores de 18 anos (entre 1 e 17 anos)
  static generateUnder18(): string {
    const today = new Date();
    const minAgeDate = new Date(today.getFullYear() - 17, today.getMonth(), today.getDate()); // 17 anos atrás
    const maxAgeDate = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate()); // 1 ano atrás

    const birthDate = faker.date.between({ from: minAgeDate, to: maxAgeDate });
    return birthDate.toISOString();
  }

  // Gera uma data para maiores de 18 anos (entre 18 e 100 anos)
  static generateOver18(): string {
    const today = new Date();
    const minAgeDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate()); // 100 anos atrás
    const maxAgeDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()); // 18 anos atrás

    const birthDate = faker.date.between({ from: minAgeDate, to: maxAgeDate });
    return birthDate.toISOString();
  }
}