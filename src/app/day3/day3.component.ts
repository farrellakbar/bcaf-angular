import { Component, Input } from '@angular/core';
import { ISimpleProduct } from '../features/products/interfaces/i-product';

class MyStyle {
  color: string = 'green';
  'font-size.px': number = 32;
  'font-weight': string = 'bolder';
}
interface ICategory {
  id: number;
  name: string;
  }
  interface IProduct {
  id: number;
  title: string;
  stock: number;
  price: number;
  categories?: ICategory[];
  }
@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrl: './day3.component.css'
})


export class Day3Component {
  product: ISimpleProduct = {
    title: 'Contoh Product 01',
    description: 'Lorem ipsum',
    price: 34000,
    stock: 20,
  };
  counter: number = 10;
  handler(data: number) {
    this.counter = data;
  }

  fontSize: number = 16;
  isActive: boolean = false;

  myObjectClass = {
    backgroundColor: 'cyan',
    'fontSize.px': 50,
  };

  myStyleClass: MyStyle = new MyStyle();

  onChangeColor() {
    this.myStyleClass.color = 'red';
  }
  // <!-- ================================================================================ -->

  show: boolean = false;
  // ================================================================================
  products: IProduct[] = [
    {
      id: 1,
      title: 'Laptop',
      stock: 20,
      price: 12000000,
      categories:
      [
        { id: 1, name: 'Electronics' }, { id: 2, name: 'Computers' },
      ],
    },
    {
      id: 2,
      title: 'Smartphone',
      stock: 50,
      price: 5000000,
    },
    {
      id: 3,
      title: 'Headphones',
      stock: 30,
      price: 300000,
      categories:
      [
        { id: 5, name: 'Electronics' }, { id: 6, name: 'Accessories' },
      ],
    },
    {
      id: 4,
      title: 'TV',
      stock: 15,
      price: 8000000,
      categories:
      [
      { id: 7, name: 'Electronics' }, { id: 8, name: 'Home Appliances' },
      ],
    },
    {
      id: 5,
      title: 'Blender',
      stock: 25,
      price: 500000,
      categories:
      [
        { id: 9, name: 'Kitchen Appliances' }, { id: 10, name: 'Home Appliances' },
      ],
    },
    {
      id: 6,
      title: 'Keyboard',
      stock: 40,
      price: 300000,
      categories:
      [
        { id: 11, name: 'Computers' }, { id: 12, name: 'Accessories' },
      ],
    },
    {
      id: 7,
      title: 'Gaming Chair',
      stock: 10,
      price: 2500000,
      categories: [
        { id: 13, name: 'Furniture' },
        { id: 14, name: 'Gaming' },
      ],
    },
    {
      id: 8,
      title: 'Smartwatch',
      stock: 60,
      price: 1500000,
      categories: [
        { id: 15, name: 'Electronics' },
        { id: 16, name: 'Wearables' },
      ],
    },
    {
      id: 9,
      title: 'Refrigerator',
      stock: 5,
      price: 12000000,
      categories: [
        { id: 17, name: 'Home Appliances' },
        { id: 18, name: 'Kitchen Appliances' },
      ],
    },
    {
      id: 10,
      title: 'Tablet',
      stock: 35,
      price: 4000000,
      categories: [
        { id: 19, name: 'Electronics' },
        { id: 20, name: 'Computers' },
      ],
    },
  ]
}
