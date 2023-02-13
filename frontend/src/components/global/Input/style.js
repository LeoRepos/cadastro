import styled from "styled-components";

export const InputContainer = styled.div`
    @media (min-width: 0px) and (max-width: 500px) {
        width: auto;
    }
    background-color: rgba(93, 59, 129, 0.08);
    height: ${({ type }) => type ? '100%' : 'auto' };
    display: flex;
    align-content: center;
    padding: 0.8rem;
    border-radius: 8px;
    width: ${({ width }) => width ? width : 'fit-content' };
    justify-content: ${({ width }) => width ? 'space-between' : 'none' };
`;

export const InputText = styled.input`
    @media (min-width: 0px) and (max-width: 500px) {
        width: auto;
    }
    border: none;
    background-color: transparent;
    height: 100%;
    font-size: 1rem;
    font-family: Inter;
    :focus {
        outline: none;
    };    
    
`;

export const InputTextContainer = styled.div``;

export const Icon = styled.img``;

export const IconContainer = styled.div`
    border-radius: 8px;
    display: flex;
    height: fit-content;
    align-items: center;
    padding: 0.3rem;
    cursor: pointer;
    transition: all .3s;
    border: 0;
    :hover {
        background-color: #ffffff;
        transform: scale(1.03);
    }
    :active {
        transform: scale(.54);
    };
`;
