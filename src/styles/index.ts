import { createGlobalStyle, styled } from 'styled-components'
import variables from './variables'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body{
    background-image: linear-gradient(330deg, ${variables.brancoAzulado}, ${variables.roxo});
    padding: 64px 0;
  }

  .container{
    display: grid;
    grid-template-columns: 45% 1fr;
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 48px;

  }
  @media (max-width: 1023px) {
    body{
      padding: 0;
    }

    .container{
      display: flex;
      flex-direction: column;
      padding: 48px 24px;
    }
  }
`

export const FirstTitle = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;
  font-size: 3rem;

  @media (max-width: 640px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`

export const SecondTitle = styled.h2`
  font-size: 36px;
  font-weight: normal;

  @media (max-width: 640px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`
