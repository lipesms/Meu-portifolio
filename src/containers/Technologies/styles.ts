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
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
  margin-right: 1.5rem;
  font-size: 1.3rem;
  background: ${variables.cinzaClaro};
  border-radius: 5px;
  font-weight: 600;
  color: #000;

  @media (max-width: 640px) {
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
    font-size: 18px;
  }
`
