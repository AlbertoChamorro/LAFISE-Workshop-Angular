export class AuthCredentialAccess {
    iat: number;
    role: string;
    name: string;
    fullName: string;
    sub: string;
    workPosition: string;

    constructor(iat: number, role: string, name: string, fullName: string, sub: string, workPosition: string) {
        this.iat = iat;
        this.role = role;
        this.name = name;
        this.fullName = fullName;
        this.sub = sub;
        this.workPosition = workPosition;
    }
}
