import Express, { request, response} from 'express';
import router from './router';
import db from './config/database';
import cors,{CorsOptions} from 'cors';

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


const corsOptions: CorsOptions = {
    origin: function(origin, callback){
        if(!origin || origin===process.env.FRONTEND_URL){
            callback(null,true)
        }else{
            callback(new Error("No permitido por CORS"),false)
        }
    }
}

server.use(cors(corsOptions))
// para que funcionen se pone /api antes del 
server.use('/api',router)

export default server;

