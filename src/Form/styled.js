import styled from "styled-components";

export const StyledForm = styled.form`
    margin: auto;
    text-align: center;
    padding: 10px;
    box-shadow: 2px 2px 20px black;
    height: 400px;
    background-color: ${({ theme }) => theme.color.perfume};
    border-radius: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
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
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 10px;
    width: 100%;
    max-width: 250px;
    border-radius: 10px;
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.purpleHeart};
    color: white;
    border: 1px solid ${({ theme }) => theme.color.purpleHeart};
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

    &:hover{
     background-color: ${({ theme }) => theme.color.fuchsiaBlue};
     transition: 0.1s;
     scale: 1.01; 
    }

    &:active{
     background-color: ${({ theme }) => theme.color.trueV};
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