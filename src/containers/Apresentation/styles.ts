import styled from 'styled-components'

export const ApresentationContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  @media (max-width: 1023px) {
    position: relative;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 48px;
  }

  @media (max-width: 640px) {
    gap: 22px;
  }
`

export const NameContainer = styled.div`
  text-align: center;
`
