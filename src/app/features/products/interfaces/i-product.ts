import { IVariant } from "../../../day2/day2.component";

export interface ISimpleProduct {
  title: string;
  description: string;
  price: number;
  stock: number;
}

export interface IProduct {
  title: string;
  description: string;
  price: number;
  stock: number;
  variants: IVariant[];
}
