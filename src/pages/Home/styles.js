import styled from "styled-components";

export const Container = styled.div `
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 46%, rgba(0,212,255,1) 100%);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const PrimeContent = styled.div`
    width: 650px;
    height: 600px;
    background-color: #FFF;
    display:flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 30px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const LogoContainer= styled.div`
    position: relative;
    left: 65%;
    bottom: 20%;
    width: fit-content;

    img {
        width: 100px;
    }

    h1 {
        color: blue;
        text-shadow: 2px 2px #FFF;
        margin-bottom: 8px;
    }
    
    span {
        font-style: oblique;
        font-Weight: 700;
        font-size: 15pt;
    }
`
export const ButtonContent = styled.div `
    max-height: 150px;
    max-width: 200px;
    display: flex;
    flex: 1;
    flex-direction: column;
    position: relative;
    top: 15%;
    left: 6%;

    button + button {
        margin-top: 2rem;
    }

    span {
        margin: 5px 0;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
    }
`