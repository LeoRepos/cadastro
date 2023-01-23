import { Router } from "express";
import Controller from "../controllers/usersController";

const loginRoute = Router();

    loginRoute.post(
        '/',
        Controller.login
    )