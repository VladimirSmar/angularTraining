import { IAddress } from './address';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  gender: string;
  department: string;
  company: string;
  imageUrl: string;
  addresses: IAddress[];
}
