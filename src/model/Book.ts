export enum SubjectArea {
  ART, HISTORY, SCIENCE, LITERATURE
}

export enum AppStatus {
  DEV = 'development',
  TEST = 'unity test',
  PROD = 'production',
  FO = 'fase out'
}


export class Book {

  public title: string;
  public author: string;
  public price: number;

  constructor(author?: string, title?: string, price?: number) {
    this.author = author;
    if (price) {
      this.price = price;
    }
    if (title) {
      this.title = title;
    }
    if (author) {
      this.author = author;
    }
  }


  toString() {
    //return 'title: ' + this.title + ' author: ' + this.author;
    return `title: ${this.title} author:  $(this.author) price: ${this.price}`;
  }

  priceWithTax(taxRate: number): number {
    return this.price = this.price * (taxRate);
  }

}


