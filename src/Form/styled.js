import styled from "styled-components";

export const StyledForm = styled.form`
    margin: auto;
    text-align: center;
    padding: 10px;
    box-shadow: 1px 1px 10px ${({ theme }) => theme.color.silver};
    height: 300px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: 420px;    
    }
`;

export const Currency = styled.span`
    width: 100%;
    max-width: 100px;
    display: inline-block;
    text-align: left;
    margin: auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
         padding: 5px;
         text-align: center;
    } 
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
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.purpleHeart};
    border-radius: 10px;
    width: 100%;
    max-width: 500px;
    margin: 10px;
    padding: 10px;
    margin-inline: 1px; 
    font-size: 20px;
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
    text-align: center;
`;

export const Loading = styled.p`
    color:  ${({ theme }) => theme.color.purpleHeart};
    text-align: center;
    padding-top: 90px;
`;

export const Failure = styled.p`
    color:  ${({ theme }) => theme.color.crimson};
    text-align: center;
    padding-top: 90px;
`;