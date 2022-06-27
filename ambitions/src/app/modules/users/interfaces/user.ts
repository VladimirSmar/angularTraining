import { IAddress } from './address';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  gender: string;
  nationality: string;
  phone: number;
  imageUrl: string;
  addresses: IAddress[];
}
