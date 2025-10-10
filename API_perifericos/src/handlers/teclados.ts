import { Request, Response } from "express";
import Teclado from "../models/Teclado";


export const getTeclados = async(request: Request, response:Response) => {
    const teclados = await Teclado.findAll();
    response.json({teclados});
}

export const borrarTeclado = async(request: Request, response:Response) => {
    response.json('borrar Teclado');
}

export const crearTeclado = async(request: Request, response:Response) => {
    response.json('crear Teclado');
}