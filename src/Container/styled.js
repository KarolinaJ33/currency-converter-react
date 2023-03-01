import styled from "styled-components";

export const Container = styled.main`
    padding: 20px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 10px;
    max-width: 700px;
    text-align: center;
    margin: 0 auto;
`;