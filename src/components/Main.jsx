import React from 'react';
import styled from 'styled-components';

const MainStyle = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1024px);
  padding: 2em;
`;

const Main = ({ children }) => (
  <MainStyle>
    <div className="Main-container">
      {children}
    </div>
  </MainStyle>
);

export default Main;
