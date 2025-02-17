import { Router } from 'express';
import { AuthRoutes } from './auth/routes';



export class AppRoutes {

    static get routes(): Router{

        const router = Router();

        /// definir las rutas principales aqui

        router.use('/api/auth', AuthRoutes.routes)



        return router;
}

}