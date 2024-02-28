import styled from 'styled-components'
import { SecondTitle } from '../../styles/index'

export const AboutMeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;

  padding-top: 24px;

  p {
    font-size: 18px;
    line-height: 1.625;
    margin-bottom: 8px;
  }
`

export const AboutMeTitle = styled(SecondTitle)`
  font-size: 32px;
  text-align: center;
  margin-bottom: 24px;
  font-weight: 600;
`

export const profileLinks = styled.div`
  align-self: end;
  display: flex;
  gap: 8px;
`
