import { AppRoutes } from './presentation/routes';
import {Server} from './presentation/server';
import { envs } from './config';



(() => { // TODO: funccion autoinvocada

    main().catch(err => console.error(err));

})();


async function main() {

    // TODO: await base de datos


    //TODO: incio de nuestro server

    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    }).start();
}   