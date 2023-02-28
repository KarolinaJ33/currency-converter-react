import styled from "styled-components";

export const StyledForm = styled.form`
    margin: auto;
    text-align: center;
    padding: 10px;
    box-shadow: 2px 2px 20px black;
    height: 400px;
    background-color: rgba(199, 224, 248, 0.822);
    border-radius: 10px;

    @media (max-width: 767px) {
        height: 600px;
    }
`;

export const Currency = styled.span`
    width: 100%;
    max-width: 500px;
    display: inline-block;
    text-align: left;
    margin-right: 5px;
`;

export const Field = styled.input`
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
    max-width: 250px;
    border-radius: 10px;
`;

export const Button = styled.button`
    background-color: hsl(258, 77%, 55%); 
    color: white;
    border: 1px solid hsl(258, 77%, 55%);
    border-radius: 10px;
    width: 100%;
    max-width: 500px;
    margin: 10px;
    padding: 10px;
    margin-inline: 5px; 
    font-weight: bold;
    transition: 0.1s;
    cursor: pointer;
    display: inline-block;

    &:hoover{
     background-color: hsl(258, 57%, 45%);
     transition: 0.1s;
     scale: 1.01; 
    }

    &:active{
     background-color: hsl(258, 87%, 50%);
    }
`;

export const ButtonContainer = styled.p`
    text-align: center;
`;

export const Supplement = styled.div`
    font-size: small;
    margin: auto;
    text-align: right;
`;