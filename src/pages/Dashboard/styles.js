import styled from "styled-components";

export const Container = styled.div`
    background: rgb(2,0,36);
    background: linear-gradient(337deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 46%, rgba(0,212,255,1) 100%);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 38px;

    h3 {
        margin-bottom: 10px;
        margin-left: 10px;
    }

    div + div {
        margin-top: 10px;
    }

    div {
        padding: 5px;
    }

`
export const TechsContainer = styled.div`
    padding: 0 38px;
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;

    div {
        margin-top: 16px;
        margin-right: 32px;
    }
`;