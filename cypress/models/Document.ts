import { DocumentGenerator } from '../generators/DocumentGenerator';

export class DocumentDataPJ {
  static async generate() {
    const document = await DocumentGenerator.generateRandomDocumentPJ();
    return [document];
  }
}

export class DocumentDataPF {
  static async generate() {
    const document = await DocumentGenerator.generateDocumentsPF();
    return document;
  }
}