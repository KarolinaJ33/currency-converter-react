import styled from "styled-components";

export const Container = styled.main`
    padding: 20px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 10px;
    width: 600px;
    height: 530px;
    text-align: center;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 350px;
        height: 700px;  
    }
`;