import { AppDataSource } from "../data-source";
import { authenticatioToken, ServiceReturn } from "../interfaces/services";
import { IUser } from "../interfaces/user";

class Service {
    
    static create = async (
        {
            user_name, 
            user_email,
            user_document,
            user_password,
        }: IUser
    ): Promise<ServiceReturn> => {
    await AppDataSource
        .createQueryBuilder()
        .insert()
        .into('table')
        .values([
            user_name,
            user_email,
            user_document,
            user_password
        ])
        .execute()

        return {
            code: 201,
            result: {
                "message": "Usuário cadastrado com sucesso!" 
            }
        }
    }
};

export default Service; 