import { ButtonNewUser } from "../ButtonNewUser";
import { Input } from "../../../global/Input";
import * as styled from "styled-components";

export const TitleTabe = () => {
    return (
        <styled.TitleTableContainer>
            <ButtonNewUser
                placeHolder={"Cadastrar novo Usuário"}
            />
            <Input
                type="search"
                placeHolder="Pesquisar Usuário"
                regex={/^\w+$/}
                maxLength={4}
                width="325px"
                action={console.log}
            />
        </styled.TitleTableContainer>
    );
};