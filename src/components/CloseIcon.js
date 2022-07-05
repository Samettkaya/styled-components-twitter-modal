import React from "react";

import styled from "styled-components";

const CloseIconWrapper = styled.button`
  background-color: transparent;
  border: 0;
  width: 37px;
  height: 37px;
  border-radius: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.closeButton.hoverBackgroundColor};
  }

  svg {
    fill: #1da1f2;
    width: 23px;
    height: 23px;
  }
`;

const CloseIcon = () => (
  <CloseIconWrapper>
    <svg viewBox="0 0 24 24">
      <g>
        <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z" />
      </g>
    </svg>
  </CloseIconWrapper>
);

export default CloseIcon;
