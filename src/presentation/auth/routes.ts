import { Router } from 'express';
import { AuthController } from './controller';  
import { AuthDatasourceImpl, AuthRepositoryImpl } from '../../infrastructure';


export class AuthRoutes {

    static get routes(): Router{

        const router = Router();
        const datasource = new AuthDatasourceImpl()
        const authRepository = new AuthRepositoryImpl(datasource)

        /// definir las rutas principales aqui

        const controller = new AuthController(authRepository)

        // router.get('/login', controller.loginUser)

        router.get('/register', controller.registerUser)



        return router;
}

}