import * as styled from "./style";
import imageHome from "../../assets/img-01.webp"

export const Login = () => {
    return (
        <styled.LoginContainer>           

        <styled.LoginSection>
            <styled.LoginImage>
                <img src={imageHome} alt="imagem qualquer" />
            </styled.LoginImage>
            <styled.LoginFormContainer>
                <styled.LoginFormTitle>
                    <h1>Member Login</h1>
                </styled.LoginFormTitle>
                
            
            
            </styled.LoginFormContainer>
        </styled.LoginSection>        

        </styled.LoginContainer>
    );
};