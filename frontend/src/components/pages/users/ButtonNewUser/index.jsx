import * as styled from "styled-components";
import addUser from '../../../../assets/AddNew.svg';

export const ButtonNewUser = ({ placeHolder }) => {
    return (
        <styled.ButtonNewUser>
            <styled.IconContainer>                
                <styled.Icon
                    src={addUser}
                    alt="icone de adicionar usuário"
                />
            </styled.IconContainer>

            <styled.PlaceHolderContainer>
                <styled.PlaceHolder>
                    {placeHolder}
                </styled.PlaceHolder>                    
            </styled.PlaceHolderContainer>

        </styled.ButtonNewUser>
    );
};