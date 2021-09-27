import styled, { keyframes } from "styled-components";

const appearFromBottom = keyframes `
    from {
        opacity: 0;
        transform: translateY(50px);
    }

    to {
        opacity: 1;
        transform: translateY(0px)
    }
`

export const Container = styled.div`
    background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 46%, rgba(0,212,255,1) 100%);
    height: 100vh;
    display: flex;
    justify-content: center;
    
`
export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    animation: ${appearFromBottom} 1s;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 0.7rem;
        
        div + div{
            margin-top: 1rem;
        }
    }

    span {
        margin-top: 1rem;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
    }
`


