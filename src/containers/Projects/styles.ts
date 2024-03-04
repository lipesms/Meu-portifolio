import styled from 'styled-components'
import variables from '../../styles/variables'

export const Projects = styled.section`
  display: flex;
  flex-direction: column;
  gap: 22px;

  a {
    text-decoration: none;
  }
`

export const Project = styled.div`
  display: flex;
  padding: 1rem 1rem;
  background: ${variables.cinzaClaroTransparente};
  border-radius: 8px;
  align-items: center;
  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: ${variables.cinzaClaro};

    h3 {
      color: ${variables.azulClaro};
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: start;
    background: none;
  }
`
export const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  width: 200px;
  border: 1px solid #1e1e1e;
  border-radius: 6px;

  @media (max-width: 640px) {
    order: 2;
  }
`

export const ProjectInfos = styled.div`
  margin-left: 16px;
  text-decoration: none;
  color: #000;
  h3 {
    transition: color 0.2s;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
  }

  @media (max-width: 640px) {
    margin-left: 0;

    p {
      margin: 16px 0;
    }
  }
`

export const SeeMore = styled.a`
  position: relative;
  align-self: flex-end;
  font-size: 16px;
  color: ${variables.cinzaClaro};
  z-index: 1;

  &:after {
    content: '';
    display: block;
    width: 0px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    z-index: -1;
    opacity: 0.3;
    top: 100%;
    left: -10px;
    transition: 0.4s;
  }

  &:hover:after {
    width: calc(100% + 20px);
    opacity: 1;
  }
  &:hover {
    color: #fff;
  }
`
