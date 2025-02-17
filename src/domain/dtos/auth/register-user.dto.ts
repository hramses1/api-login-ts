import { Validators } from "../../../config"


export class RegisterUserDto {
    private constructor(
        public name: string,
        public email: string,
        public password: string,
    ) {}

    static create(object: {[key:string]:any}): [string?, RegisterUserDto?] {

        const {name, email, password} = object

        if (!name) return ['Name is required']

        if (!Validators.validateName(name)) return ['Name is not valid']

        if (!email) return ['Email is required']

        if ( !Validators.validateEmail(email) ) return ['Email is not invalid']

        if (!password) return ['Password is required']

        if (!Validators.validatePassword(password)) return ['Password is not valid']


        return [

            undefined,

            new RegisterUserDto(name, email, password)
        ]
    }
} 