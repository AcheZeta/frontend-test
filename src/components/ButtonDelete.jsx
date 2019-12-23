import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: .5rem;
  row-gap: .5em;
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
const Button = styled.button`
    display: block;
    clear: both;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    border-radius: 20px !important;
    text-decoration: none !important;
    font-size: 14px;
    background-color: #7a6ff0;
`;


const ButtonGen = () => (
  <ButtonContainer>
    <Button>OK</Button>
  </ButtonContainer>
);


export default ButtonGen;
