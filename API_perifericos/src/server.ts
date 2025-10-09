import Express, { request, response} from 'express';
import router from './router';

const server = Express();

// para que funcionen se pone /api antes del 
server.use('/api',router)

export default server;

