import styled from "styled-components";

export const ButtonNewUser = styled.div`
    background-color: #785C96; 
    border-radius: 8px;    
    display: flex;
    width: fit-content;
    padding: 0.8rem;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -ms-user-select: none; 
    user-select: none;
    border: 0;
    transition: all .3s;
    :hover {
        transform: scale(1.03);
    }
    :active {
        transform: scale(.98);
    }
`;

export const IconContainer = styled.div``;
export const Icon = styled.img``;
export const PlaceHolderContainer = styled.div`
    margin-left: 1rem;
`;
export const PlaceHolder = styled.h1`
    font-family: Poppins;
    font-size: normal;
    font-weight: 500;
    color: #FFF;
`;
