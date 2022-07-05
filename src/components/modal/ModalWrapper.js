import styled from "styled-components";

export const ModalWrapper = styled.section`
  padding: 16px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 16px;
  width:  width:100%;
  padding-bottom: 50px;
   @media (max-width: 320px) {
    width:100%
  }
`;