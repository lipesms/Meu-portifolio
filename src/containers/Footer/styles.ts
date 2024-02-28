import styled from 'styled-components'
import variables from '../../styles/variables'

export const Foot = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 164px;
  color: ${variables.pretoClaro};
`

export const DevelopmentInfos = styled.p`
  font-size: 14px;
  width: 60%;

  a {
    color: ${variables.azulMassinha};
    text-decoration: none;
    transition: color 0.2s;
    font-size: 14px;

    &:hover {
      color: #fff;
    }
  }
`

export const Copy = styled.p`
  font-size: 14px;
  align-self: flex-end;
`
