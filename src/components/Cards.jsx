import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  row-gap: 0.5em;
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
const CardDiv = styled.div`
  transition: 0.3s;
  padding: 5%;
  margin: 0 auto;
  display: block;
  background-color: #e7e6f8;
  box-shadow: 0 4px 6px 0 #352c60;
  width: -webkit-fill-available;
  text-align: center;
`;
const CardImg = styled.img`
  width: 100%;
  margin: 0 auto;
  display: block;
`;
const CardDetail = styled.div`
  padding: 2px 16px;
`;
const CardAnchor = styled.a`
  color: #212121;
  text-decoration: none;
  font-size: 1.2em;
  text-align: left;
`;

const Cards = ({ data }) => (
  <div className="Projectos">
    <CardContainer>
      {data.map((pokemon) => (
        <CardDiv>
          <div className="Pokemon-name" key={pokemon}>
            <h2>{pokemon}</h2>
          </div>
          <CardImg src="" alt={name} />
        </CardDiv>
      ))}
    </CardContainer>
  </div>
);

// {props.data.map((skill, index) => (
//   <div className='Skill-item' key={`skill-${index}`}>
//   <Skillsh5>{skill.name}</Skillsh5>
//   <SkillsLine>
//     <SkillsSpan width={skill.percentage} />
//   </SkillsLine>
// </div>
// ))}


export default Cards;
