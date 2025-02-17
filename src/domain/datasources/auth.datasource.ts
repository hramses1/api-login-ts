import { LoginUserDto } from '../dtos/auth/login-user.dto';
import { UserEntity } from '../entities/user.entity';
import { RegisterUserDto } from './../dtos/auth/register-user.dto';


export abstract class AuthDatasource {
    /** 
     * TODO: 
     * 
     * Add the return type of the methods
     *  
     * */

    abstract register(registerUserDto:RegisterUserDto): Promise<UserEntity>

    //abstract loginUser(loginUserDTO: LoginUserDto): Promise<void>
}