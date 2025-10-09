import { Request, Response } from "express";


export const getTeclados = async(request: Request, response:Response) => {
    response.json('get Teclados');
}

export const borrarTeclado = async(request: Request, response:Response) => {
    response.json('borrar Teclado');
}

export const crearTeclado = async(request: Request, response:Response) => {
    response.json('crear Teclado');
}