import { Router } from "express";
import { borrarTeclado, crearTeclado, getTeclados } from "./handlers/teclados";
import { getAudifonos, borrarAudifono,crearAudifono } from "./handlers/audifonos";
import { borrarMouse, crearMouse, getMouse } from "./handlers/mouse";
import { borrarMonitor, crearMonitor, getMonitor } from "./handlers/monitor";
const router = Router();

//productos
//teclado
router.get('/teclados', getTeclados);
router.delete('/teclados/:id', borrarTeclado);
router.post('/teclados', crearTeclado);
//audifonos
router.get('/audifonos', getAudifonos);
router.delete('/audifonos/:id', borrarAudifono);
router.post('/audifonos', crearAudifono);
//mouse
router.get('/mouse', getMouse);
router.delete('/mouse/:id', borrarMouse);
router.post('/mouse', crearMouse);

//monitor
router.get('/monitor', getMonitor);
router.delete('/monitor/:id', borrarMonitor);
router.post('/monitor', crearMonitor);

export default router;