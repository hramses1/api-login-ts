

import express, { Router } from 'express';

interface Options {
    port?: number
    routes: Router
}

export class Server {

    public readonly app = express()

    private readonly port : number;

    private readonly routes: Router;

    constructor(opcions: Options) {
        const {port = 3100, routes} = opcions

        this.port = port
        this.routes = routes
        
        console.log('Server is running')
    }

    async start() {

        // Middlewares
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))


        // Routes
        this.app.use(this.routes)

        // Start server
        this.app.listen(this.port, () => {
            console.log(`Server is started  is running on port ${this.port}`)
        })

    }
} 