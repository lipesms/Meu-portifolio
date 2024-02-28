import styled from 'styled-components'

import variables from '../../styles/variables'

export const NavBar = styled.ul`
  display: flex;
  gap: 20px;

  a {
    padding: 0 8px 4px;
    text-decoration: none;
    font-size: 18px;
    color: #fff;
    transition: border 0.2s ease-out;

    &.active {
      border-bottom: 2px solid #fff;
    }
    &:hover {
      border-bottom: 2px solid ${variables.branco};
    }
  }

  @media (max-width: 1023px) {
    display: none;
  }
`
