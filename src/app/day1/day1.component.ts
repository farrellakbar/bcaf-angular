import { Component } from '@angular/core';
// (2)
// interface Iproduct {
//   id: number;
//   title: string;
//   price: number;
//   category: ICategory;
//   stock?: number;
// }

// interface ICategory {
//   id: number;
//   name: string;
// }
// ====================================================================
// (4)
// interface IDigitalBook {
//   id: number;
//   name: string;
//   price: number;
//   methode: string;
// }

// interface IPrintableBook {
//   id: number;
//   name: string;
//   price: number;
//   methode: string;
// }

// function salesBook<T>(product: T): void {
//   return product;
// }
// ====================================================================
// (3)
function greet(): void {
  console.log('hello evrybody');
}
function greet2(name: string): void {
  console.log(`hello evrybody 2 ${name}`);
}
function greetDefault(name: string ="Default"): void {
  console.log(`hello evrybody 3 ${name}`);
}
function greetOptional(name: string ="Optional"): void {
  if(name){
    console.log(`hello evrybody ${name}`);
  }
  else{
    console.log('Tidak Ada Parameter');
  }
}
function add(a:number, b:number): number {
  return a + b;
}
@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrl: './day1.component.css'
})
export class Day1Component {
// (1)
  // title: string = 'bcaf-angular';
  // age: number = 32;
  // a: { id: number; name: string } = {
  //   id: 1,
  //   name: 'Farrell',
  // };
  // getName(): string {
  //   return this.a.name;
  // }
  // test=(param: string) : string => {
  //   return param
  // }
  // ====================================================================
  // (2)
  // product: Iproduct = {
  //   id: 1,
  //   title: 'title',
  //   price: 100,
  //   category: {
  //     id: 1,
  //     name: 'title Cat'
  //   },
  //   stock:20,
  // }
  // ====================================================================
  // (3)
  greet = greet();
  greet2 = greet2('Farrell');
  greetDefault = greetDefault();
  greetOptional = greetOptional('');
  result = add(1, 2);
  add = (a: number, b: number): number => a + b;
  result2 = add(5, 1);

}
