import {Phone} from './Phone';

export class User {
    id?: number;
    email: string;
    password?: string;
    firstName: string;
    lastName: string;
    phone?: Phone;
}
