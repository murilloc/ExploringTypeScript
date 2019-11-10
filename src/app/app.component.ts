import {Component} from '@angular/core';
import {AppStatus, Book, SubjectArea} from "../model/Book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExploringTypeScript';

  readonly mynumber: number = 52;

  constructor() {

    console.log('App is os status: ' + AppStatus.DEV);
    console.log('App is os status: ' + AppStatus['PROD']);

    console.log(`Enum of History is ${SubjectArea.HISTORY}`);
    console.log(`Enum of SubectArea 2  is ${SubjectArea[2]}`);

    for (const subject in SubjectArea) {
      console.log(`Subject ${subject}`)
    }


    // Only needed for enums without custom values
    const enumArray = Object.keys(SubjectArea);
    for (const value of enumArray.slice(enumArray.length / 2)) {
      console.log(`-> ${value}`);
    }

    for(const status in AppStatus){
      console.log(`Status --> ${status}   |  ${AppStatus[status]}`)
    }

    // Getting labe from enum value

    let label;
    for(const status in AppStatus){
      if(AppStatus[status] === 'development'){
        label = status;
      }
    }
    console.log(`the a matching label is ${label}`);

    let label2 = Object.keys((AppStatus)).find(it =>  AppStatus[it] === 'production');
    console.log(`LABEL2 ${label2}`);


    //this.exploringArrays();
    this.objectEquality();

    let myConstumer = {
      firstName: 'Murillo',
      age: 55
    };

    let myBook = new Book('Murillo Cesar');
    myBook.title = 'A Fantastic Read';

    console.log(myConstumer);
    console.log(typeof myConstumer);
    console.log(typeof myBook);

    myBook.price = 52.00;
    console.log(myBook);

    console.log('Price with tax: ' + myBook.priceWithTax(3.45));

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const oddNumbers = numbers.filter(
      num => {
        return num % 2 === 1;
      }
    );

    const evenNumbers = numbers.filter(num => num % 2 === 0);

    console.log(oddNumbers);
    console.log(evenNumbers);

  }


  someMethod() {
    let anotherNumber = 0;
    const A_THIRD_NUMBER = 102;

    anotherNumber = 34;
    //anotherNumber = 'Cesar';

    console.log(this.mynumber);
    //this.mynumber = 45;


  }


  exploringArrays() {
    const myArray1: Array<number> = new Array<number>(5);
    const myArray2: number[] = [1, 2, 3, null];
    console.log(myArray1);
    console.log(myArray2);

    console.log(myArray2[0]);
    console.log(myArray2.slice(1, 2));
    console.log(myArray2.push(4));
    console.log((myArray1.pop()));

    for (let i = 0; i < 10; i++) {
      console.log(i);
    }

    for (const next of myArray2) {
      console.log(next);
    }

    let num = 0;
    while (num < 10) {
      console.log(num);
      num++;
    }

  }

  objectEquality() {
    let myValue: number;
    console.log(myValue === null);
    console.log(1 == 1);
    console.log(1 === 1);
    // console.log('1' == 1);
    // console.log('1' === 1);


  }
}
