import * as styled from "./style";

export const Header = ({ CurrentPage }) => {
    return (
        <styled.HeaderContainer>

            <styled.TitleContainer>
                <styled.TitleH1>{ CurrentPage }</styled.TitleH1>
                <styled.TitleH2>Sejá bem-vindo a tela de cadastro</styled.TitleH2>
            </styled.TitleContainer>

            <styled.InputContainer>
                <InputHeader />
            </styled.InputContainer>



        </styled.HeaderContainer>
    )
}