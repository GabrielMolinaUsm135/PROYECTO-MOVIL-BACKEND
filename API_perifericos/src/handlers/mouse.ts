import { Request, Response } from "express";


export const getMouse = async(request: Request, response:Response) => {
    response.json('get Mouse');
}
export const borrarMouse = async(request: Request, response:Response) => {
    response.json('borrar Mouse');
}

export const crearMouse = async(request: Request, response:Response) => {
    response.json('crear Mouse');
}