import { Login } from './login';
import { Access } from './access';

export class User extends Login {
    id: number;
    fullName: string;
    isLocked: boolean;
    logins: Access[];
}
