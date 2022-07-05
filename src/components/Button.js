import styled from "styled-components";

const Button = styled.button`
  
  border-radius: 26px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  display: block;
  width: 100%;
  height:48px;
  background-color: ${({ theme, type }) => theme.button[type].backgroundColor};
  border: 1px solid ${({ theme, type }) => theme.button[type].borderColor};
  color: ${({ theme, type }) => theme.button[type].color};
  text-transform: capitalize;

  &:hover {
    background-color: ${({ theme, type }) =>
      theme.button[type].hoverBackgroundColor};
    border-color: ${({ theme, type }) => theme.button[type].borderColor};
  };

`;

export default Button