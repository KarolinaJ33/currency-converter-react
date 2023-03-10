import styled from "styled-components";

export const Name = styled.header`
    padding: 10px;
`;

export const Title = styled.h1`
    max-width: 700px;
    width: 100%;
    font-size: 40px;
    color: ${({ theme }) => theme.color.white};
    background-color:${({ theme }) => theme.color.purpleHeart};  
    border-radius: 10px;
    padding: 5px;
    border: 1px solid ${({ theme }) => theme.color.purpleHeart};
    text-align: center;
    display: inline-block;
`;