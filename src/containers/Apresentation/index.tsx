import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { addProjects } from '../../store/reducers/projects'
import { addMyDescription } from '../../store/reducers/aboutMe'
import { addTechnologies } from '../../store/reducers/technologies'

import NavigationBar from '../../components/NavigationBar'
import ImageComponent from '../../components/ImageComponent'

import * as S from './styles'
import { FirstTitle, SecondTitle } from '../../styles'

const Apresentation = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://lipesms.github.io/Meu-portifolio/src/data.json')
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(addProjects(data.projects))
        dispatch(addMyDescription(data.aboutMe))
        dispatch(addTechnologies(data.technologies))
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
