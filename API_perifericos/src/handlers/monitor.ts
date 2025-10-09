import { Request, Response } from "express";


export const getMonitor = async(request: Request, response:Response) => {
    response.json('get Monitor');
}
export const borrarMonitor = async(request: Request, response:Response) => {
    response.json('borrar Monitor');
}

export const crearMonitor = async(request: Request, response:Response) => {
    response.json('crear Monitor');
}