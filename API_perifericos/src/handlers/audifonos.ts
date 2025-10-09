import { Request, Response } from "express";


export const getAudifonos = async(request: Request, response:Response) => {
    response.json('get Audifonos');
}

export const borrarAudifono = async(request: Request, response:Response) => {
    response.json('borrar Audifono');
}

export const crearAudifono = async(request: Request, response:Response) => {
    response.json('crear Audifono');
}