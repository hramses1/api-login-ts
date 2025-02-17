
export class Validators {
    constructor() {}

    static validateEmail = (email: string): boolean => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    static validatePassword = (password: string): boolean => {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        return re.test(password);
    }

    static validateName = (name: string): boolean => {
        const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        return re.test(name);
    }

    static validateRol = (rol: string): boolean => {
        const re = /^(admin|user)$/;
        return re.test(rol);
    }
}