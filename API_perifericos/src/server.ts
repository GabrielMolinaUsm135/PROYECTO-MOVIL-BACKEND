import Express, { request, response} from 'express';
import router from './router';
import db from './config/database';

const server = Express();

async function conectarBD(){
    try{
        await db.authenticate()
        db.sync()
        console.log("Conexion a la base de datos establecida");
    }catch(error){
        console.error("Error al conectar a la base de datos:", error);
    }
}

conectarBD();

// para que funcionen se pone /api antes del 
server.use('/api',router)

export default server;

