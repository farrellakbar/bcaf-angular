import { IGeo } from './i-geo';

export interface IAddress {
  street: string;
  suite?: string; //Optional
  zipcode?: string;
  city: string; //Optional
  geo?: IGeo; //Optional
}

export interface IAddressChild extends IAddress {
  zip: string;
}

