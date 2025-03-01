import { DetailedHTMLProps, HTMLAttributes } from "react";
import styled from "styled-components";

// character-card
export const CharacterCardContainer = styled.div`
border-radius: 10px;
text-align: center;
padding: 15px;
transition: all 0.3s ease-in-out;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
background-color: #333;

&:hover {
    transform: scale(1.05);
  }
`
// character-card__image
export const CharacterCardImage = styled.img`
width: 100%;
border-radius: 10px;
height: 300px;
object-fit: cover;

`
// character-card__name
export const CharacterCardName = styled.h3`
font-size: 1.4rem;
font-weight: bold;
margin: 10px 0;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

`
// character-card__species
export const CharacterCardSpecies = styled.p`
font-size: 1rem;
font-weight: bold;
margin: 10px 0;
`
// character-gender
export const CharacterCardGender = styled.p`
font-size: 1rem;
font-weight: bold;
margin: 10px 0;
`

// character-card__status
export const CharacterCardStatus = styled.p`
font-size: 1rem;
font-weight: bold;
margin: 10px 0;
`

interface StatusTextProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  status: string;
}

export const StatusText = styled.span<StatusTextProps>`
  margin-left: 5px;
  font-weight: bold;
  color: ${({ status }) =>
    status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray'};
`


