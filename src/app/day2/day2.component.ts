import { Component } from '@angular/core';
//Sebenernya Folder Interface
//i-variant.ts
export interface IVariant {
  key: string;
  value: string | number;
  picture: string;
}
//Sebenernya Folder Interface
//i-product.ts
export interface IProduct {
  title: string;
  description: string;
  price: number;
  stock: number;
  variants: IVariant[];
}
//Sebenernya Folder Models
//variant.ts
export class Variant implements IVariant {
  key: string = '';
  value: string | number = '';
  picture: string = '';
}
//Sebenernya Folder Models
//product.ts
export class Product {

}
// ========================================================================================================================================
//Sebenernya Folder Interface
//i-todo.ts
export interface ITodo {
  task: string;
}

//Sebenernya Folder Models
//todo.ts
export class Todo implements ITodo {
  task: string = '';
}
// ========================================================================================================================================

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrl: './day2.component.css'
})

export class Day2Component {
  urlInterpolation: string = 'https://icons.iconarchive.com/icons/bokehlicia/captiva/256/atom-icon.png';
  urlDataBinding: string = 'https://icons.iconarchive.com/icons/bokehlicia/captiva/256/atom-icon.png';

  OnChangeImage(changeImage: string) {
    this.urlDataBinding =  changeImage;
  }

  name: string ='';

  harga: number = Number(899000);
  tanggal: Date = new Date('2024-01-01');
  warna: string[] = ['putih', 'hitam', 'biru', 'grey'];
  diskon: number = Number(30);
  // getPajak(persentase: number, hargaAfterDiskon: number): number {
  //   return hargaAfterDiskon + this.harga * persentase;
  // }
  urlFotoMobil: string = 'https://www.hyundai.com/content/dam/hyundai/id/id/images/local/ioniq5/id/hightlight/Cover-1_D_Home-Banner_1860x720.png';

  active: number = 1;
  index!: number;
  productVariant: IVariant = new Variant();

  product: IProduct = {
    title: 'Xiaomi Redmi Buds 6 Play',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    price: 34000,
    variants: [
      {
        key: 'ukuran',
        value: 1,
        picture:
          'https://kreditkerenbanget.com/imagecache/original/r1xqa1663035968549YWJFP.webp',
      },
    ],
    stock: 0,
  };

  getPajak(persentase: number, hargaAfterDiskon: number): number {
    return hargaAfterDiskon + this.product.price * persentase;
  }

  // OPEN ADD VARIANT
    addVariant() {
      let payload = {
        key: this.productVariant.key,
        value: this.productVariant.value,
        picture: this.productVariant.picture,
      };
      this.product.variants.push(payload);

      this.productVariant.key = '';
      this.productVariant.value = '';
      this.productVariant.picture = '';
    }
  // CLOSE ADD VARIANT
  // OPEN GET VARIANT
    getVariant(data: IVariant) {
      let index: number = this.product.variants.findIndex((value: IVariant) => {
        return data.key === value.key;
      });
      this.index = index;

      // versi non-control (reference)
      // this.productVariant = data;
      // versi control (copy)
      this.productVariant.key = data.key;
      this.productVariant.picture = data.picture;
      this.productVariant.value = data.value;
      // console.log(index);
    }
  // CLOSE DELETE VARIANT
  // OPEN DELETE VARIANT
    updateVariant() {
      console.log(this.index);
      if (this.index > -1) {
        this.product.variants[this.index] = this.productVariant;
      }
    }
  // CLOSE DELETE VARIANT
  // OPEN DELETE VARIANT
    deleteVariant(i: number) {
      this.product.variants.splice(i, 1);
    }
  //CLOSE DELETE VARIANT

  // ========================================================================================================================================

  todos: ITodo[] = [];
  todo: ITodo = new Todo();
  //OPEN ADD TODO
    addTodo() {
      let payload = {
        task: this.todo.task,
      };
      this.todos.push(payload);
      this.todo.task = '';
    }
  //CLOSE OPEN TODO
  //OPEN DELETE TODO
    deleteTodo(index: number) {
      this.todos.splice(index, 1);
    }
  //CLOSE DELETE TODO
}
