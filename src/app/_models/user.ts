import { Role } from './role';

export class User {
  id!: string;
  title!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  phonenumber!: string;
  company!: string;
  dob!: string;
  isDeleting: boolean = false;
}
