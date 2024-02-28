import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'

import * as S from './styles'

const Technologies = () => {
  const { myLanguages, tools } = useSelector(
    (state: RootReducer) => state.technologies
  )
  return (
    <S.TechnologiesContainer id="technologies">
      <h2>Idiomas que eu falo:</h2>
      {
        <S.Technologies>
          {myLanguages.map((language: string) => (
            <S.Technology key={language}>{language}</S.Technology>
          ))}
        </S.Technologies>
      }
      <h2>Ferramentas:</h2>
      {
        <S.Technologies>
          {tools.map((tool: string) => (
            <S.Technology key={tool}>{tool}</S.Technology>
          ))}
        </S.Technologies>
      }
    </S.TechnologiesContainer>
  )
}

export default Technologies
