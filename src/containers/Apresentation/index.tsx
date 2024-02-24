import NavigationBar from '../../components/NavigationBar'
import ImageComponent from '../../components/ImageComponent'

import * as S from './styles'
import { FirstTitle, SecondTitle } from '../../styles'

const Apresentation = () => {
  return (
    <div>
      <S.ApresentationContainer>
        <ImageComponent />

        <S.NameContainer>
          <FirstTitle>Felipe Martins</FirstTitle>
          <SecondTitle>Desenvolvedor Front-end</SecondTitle>
        </S.NameContainer>

        <NavigationBar />
      </S.ApresentationContainer>
    </div>
  )
}

export default Apresentation
