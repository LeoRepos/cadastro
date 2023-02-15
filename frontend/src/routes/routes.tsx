import { Routes, Route } from 'react-router-dom';
import { ButtonNewUser } from '../components/pages/users/ButtonNewUser';

import * as Pages from "../pages/PagesExport";


export const Rotas = () => {
    return (
        <Routes>
            <Route 
                path='/login' 
                element={<Pages.Login/>} 
            />
            <Route 
                path='/list' 
                element={<Pages.ListUsers/>} 
            />
            <Route 
                path='/create_user' 
                element={<Pages.ListUsers/>} 
            />
        </Routes>
    );
}