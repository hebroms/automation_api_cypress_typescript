export class ImageProvider {
    /**
     * Retorna uma URL de uma imagem aleatória.
     * Caso queira trocar de serviço, basta mudar aqui.
     */
    static getRandomImageUrl(): string {
      return 'https://picsum.photos/200'; // Lorem Picsum (200x200)
    }
  }
  