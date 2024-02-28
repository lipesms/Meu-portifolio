import styled from 'styled-components'

export const PerfilImage = styled.div`
  max-width: 350px;
  min-width: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  height: fit-content;

  .image {
    z-index: 1;
    width: 100%;
    box-shadow: 8px 10px 20px 0px #00000042;
  }

  .square {
    position: absolute;
    bottom: -42px;
    left: -42px;
    width: 100%;
  }

  .pointedSquare {
    position: absolute;
    top: -42px;
    right: -42px;
    width: 100%;
  }

  @media (max-width: 1023px) {
    max-width: 45%;

    .square {
      bottom: -10px;
      left: -10px;
    }
    .pointedSquare {
      top: -10px;
      right: -10px;
    }
  }
`
