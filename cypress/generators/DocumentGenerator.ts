import { DOCUMENT_TYPES_PF, DOCUMENT_TYPES_PJ, MIME_TYPES } from '../data/documentTypeData';
import { faker } from '@faker-js/faker';

export class DocumentGenerator {

    static generateDocumentsPF(){
        const shuffledTypes = faker.helpers.shuffle(DOCUMENT_TYPES_PF); 
        const randomType = DOCUMENT_TYPES_PF[Math.floor(Math.random() * DOCUMENT_TYPES_PF.length)];
        const randomMime = MIME_TYPES[Math.floor(Math.random() * MIME_TYPES.length)];
        const fileExtension = randomMime.split('/')[1];

        return shuffledTypes.slice(0, 3).map((type) => ({
          documentType: type,
          file: `data:${randomMime};base64,abc...`,
          mimeType: randomMime,
          name: `document-${Date.now()}.${fileExtension}`,
        }));
      }

    static async generateRandomDocumentPJ() {
        const randomType = DOCUMENT_TYPES_PF[Math.floor(Math.random() * DOCUMENT_TYPES_PF.length)];
        const randomMime = MIME_TYPES[Math.floor(Math.random() * MIME_TYPES.length)];
        const fileExtension = randomMime.split('/')[1];

        return {
            documentType: randomType,
            file: `data:${randomMime};base64,abc...`,
            mimeType: randomMime,
            name: `document-${Date.now()}.${fileExtension}`,
        };
    }
}
