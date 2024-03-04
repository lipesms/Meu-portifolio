import styled from 'styled-components'

import variables from '../../styles/variables'

export const NavBar = styled.ul`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    font-size: 18px;
    color: #fff;
    transition: border 0.2s ease-out;
    padding: 0px 4px;

    transition: padding 0.1s;

    &:hover {
      border-bottom: 2px solid ${variables.branco};
      padding-bottom: 6px;
    }

    &.active {
      padding-bottom: 6px;
      border-bottom: 2px solid #fff;
    }
  }

  @media (max-width: 1023px) {
    display: none;
  }
`
