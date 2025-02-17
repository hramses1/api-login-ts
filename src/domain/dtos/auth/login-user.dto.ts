import { Validators } from "../../../config/validators"



export class LoginUserDto {
    constructor(

        public email: string,
        public password: string,

    ) {}

    static create(object: {[key:string]:any}): [string?, LoginUserDto?] {
            
            const {email, password} = object
    
            if (!email) return ['Email is required']
    
            if (!Validators.validateEmail(email)) return ['Email is not invalid']
    
            if (!password) return ['Password is required']
    
            if (!Validators.validatePassword(password)) return ['Password is not valid']
    
            return [
    
                undefined,
    
                new LoginUserDto(email, password)
            ]
        }
}