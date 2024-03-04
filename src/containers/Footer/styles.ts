import styled from 'styled-components'
import variables from '../../styles/variables'

export const Foot = styled.footer`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 32px;
  margin-top: 164px;
  color: ${variables.pretoClaro};

  .up {
    position: absolute;
    text-decoration: none;
    bottom: -64px;
    right: -10px;
    transition: padding 0.4s;

    img {
      max-width: 48px;
    }

    &:hover {
      padding-bottom: 8px;
    }

    @media (max-width: 640px) {
      bottom: -10px;
    }
  }
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

  @media (max-width: 640px) {
    align-self: flex-start;
  }
`
