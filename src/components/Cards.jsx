import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: .5rem;
  row-gap: .5em;
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
const CardDiv = styled.div`
  background-color: #fff;
  font-family: 'Nunito', sans-serif;
  text-align: center;
  border-top: 4px solid #7a6ff0;
  border-radius: 5px;
  padding: 1px 1px 1px 1px;
  margin: 0 auto;
  display: block;
  box-shadow: 0 2px 4px 0 #342a5e;
  width: -webkit-fill-available;
`;

const CardDetail = styled.div`
  padding: 2px 5px 5px 5px;
`;

const Cards = ({ data }) => (
  <div className="Projectos">
    <CardContainer>
      {data.map((user) => (
        <CardDiv key={user.id}>
          <h2>{user.name}</h2>
          <CardDetail key={`card-${user.id}`}>
            {user.email}
          </CardDetail>
        </CardDiv>
      ))}
    </CardContainer>
  </div>
);


export default Cards;
