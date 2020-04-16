import React, { useState } from 'react';
import styled, { StyledComponent, DefaultTheme, css, StyledFunction } from 'styled-components';

const Bar = styled.div`
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: white;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: all .5s ease-in-out;
`;

const HandburgerButtonContainer = styled.div`
  position: fixed;
  right: 2rem;
  top: 2rem;
`;

interface HandburgerButtonProps {
  open: boolean
}

const HandburgerButton = styled.div<HandburgerButtonProps>`
  width: 30px;
  height: 20px;
  position: relative;
  margin: auto;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  ${Bar} {
    &:first-child {
      top: 0px;
    }
    &:nth-child(2) {
      top: 10px;
    }
    &:last-child {
      top: 20px;
    }
  }
  ${props => props.open && css`
    ${Bar} {
      &:first-child { top: 10px;
        transform: rotate(135deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child { top: 10px;
        transform: rotate(-135deg);
      }
    }
  `}
`;



export const MenuButton = ({ open }: { open: boolean }) => (
  <HandburgerButtonContainer>
    <HandburgerButton open={open}>
      <Bar>&nbsp;</Bar>
      <Bar>&nbsp;</Bar>
      <Bar>&nbsp;</Bar>
    </HandburgerButton>
  </HandburgerButtonContainer>
);