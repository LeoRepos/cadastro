export interface ServiceReturn {
    code: number; 
    result: object
}

export interface authenticatioToken {
    cpf: string,
    password: string,
    iat: number, 
    exp: number
}