import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background: #fff;
    text-align: center;
    border-top: 4px solid #7a6ff0;
    border-radius: 5px;
    position: relative;
    top: 24px;
    width: 50%;
    margin-left: 0;
    padding: 20px 20px 20px 20px;
    box-shadow: 0 2px 4px 0 #342a5e;
`;

const FormInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background-color: #fff;
  border: solid 1px rgba(53,44,96,0.5);
  text-indent: 10px;
  margin-top: 10px;
`;

const Forms = () => (
  <FormContainer>
    <div className="Form-container">
      <FormInput type="text" name="" id="new" placeholder="Nuevo Pokemon" />
      <FormInput type="text" name="" id="name" placeholder="Nombre" />
      <FormInput type="text" name="" id="number" placeholder="Numero" />
    </div>
  </FormContainer>
);

export default Forms;
