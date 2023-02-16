import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex; 
    height: 100vh;
    width: 100vw;
    justify-content:center;
    align-items: center;
    background: linear-gradient(90deg, rgba(43,158,118,1) 0%, rgba(73,124,157,1) 50%, rgba(0,212,255,1) 100%);
`;

export const LoginSection = styled.section`
    background-color: #FFF;
    width: 80vw;
    height: 80vh;
    border-radius: 0.5rem;
    display: flex;
`;

export const LoginImage = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginFormTitle = styled.h1`
     margin-top: 4.5rem;
     font-family: Arial, Helvetica, sans-serif;
     font-size: 1rem;
     text-align: center;
     height: 10rem;
     width: 100%;

`;

export const LoginFormContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
`;
