import perfilImage from '../../assets/perfil.png'
import square from '../../assets/square.svg'
import pointedSquare from '../../assets/pointed square.svg'

import * as S from './styles'

const ImageComponent = () => {
  return (
    <S.PerfilImage>
      <img
        className="image"
        src={perfilImage}
        alt="Imagem em preto e branco do felipe martins sorrindo"
      />
      <img className="square" src={square} />
      <img className="pointedSquare" src={pointedSquare} />
    </S.PerfilImage>
  )
}

export default ImageComponent
