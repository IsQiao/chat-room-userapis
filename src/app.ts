import express from 'express'
import { RegisterRoutes } from './routes/routes';

const port = parseInt(process.env.PORT || '3000');

class App {
    private httpServer: express.Express;
    constructor() {
        this.httpServer = express();

        RegisterRoutes(this.httpServer);

        this.httpServer.listen(port, () => console.log(`Server started listening to port ${port}`));
    }
}

new App();