import styled from 'styled-components'

export const ApresentationContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  margin: 64px 0 40px;
  text-align: center;

  @media (max-width: 1023px) {
    padding-left: 36px;
  }
`
