import styled from 'styled-components'

import variables from '../../styles/variables'

export const TechnologiesContainer = styled.div`
  h2 {
    font-size: 32px;
    font-weight: 600;
  }
`

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
`

export const Technology = styled.div`
  padding: 1rem 2rem;
  margin-bottom: 1.5rem;
  margin-right: 1.5rem;
  font-size: 1.6rem;
  background: ${variables.cinzaClaro};
  border-radius: 5px;
  font-weight: 600;
  color: #000;
`
