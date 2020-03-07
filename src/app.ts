import express from 'express'
import swaggerUi from 'swagger-ui-express'
import bodyParser from 'body-parser';
import { RegisterRoutes } from './routes/routes';
import * as swaggerDocument from './../api/dist/swagger.json'

const port = parseInt(process.env.PORT || '3000');

class App {
    private httpServer: express.Express;
    constructor() {
        this.httpServer = express();

        RegisterRoutes(this.httpServer);
        this.httpServer.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        this.httpServer.listen(port, () => console.log(`Server started listening to port ${port}`));
    }
}

new App();