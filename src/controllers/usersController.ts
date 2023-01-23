import { Request, Response } from "express";
import { IUser } from "../interfaces/user";
import Service from "../services/usersServices"

class Controller {



//* Metodo para Login
static login = async (req: Request, res: Response) => {

        // const {
        //     cpf,
        //     password
        // } = req.body;
        
        // const serviceReturn = await Service.login(cpf, password);
        // return res.status(serviceReturn.code).send(serviceReturn.result)

    }

//* Metodo para criar usuário
static create =async (req: Request, res: Response) => {

        const {
            name, 
            email,
            document, 
            password
        } = req.body;

        const user: IUser = {
            user_name: name, 
            user_email: email, 
            user_document: document,
            user_password: password  
        };
        const serviceReturn = await Service.create(user);
        return res.status(serviceReturn.code).send(serviceReturn.result);
        
    }

}

export default Controller;