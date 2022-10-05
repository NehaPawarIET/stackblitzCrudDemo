import { Role } from './role';

export class User {
  id!: string;
  title!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  phonenumber!: number;
  company!: string;
  dob!: Date;
  isDeleting: boolean = false;
}
