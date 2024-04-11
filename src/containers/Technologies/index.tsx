import * as S from './styles'

import { useGetTechnologiesQuery } from '../../services/api'

const Technologies = () => {
  const { data: technologies } = useGetTechnologiesQuery()
  if (technologies) {
    return (
      <S.TechnologiesContainer id="technologies">
        <h2>Idiomas que eu falo:</h2>
        {
          <S.Technologies>
            {technologies.myLanguages.map((language: string) => (
              <S.Technology key={language}>{language}</S.Technology>
            ))}
          </S.Technologies>
        }
        <h2>Ferramentas:</h2>
        {
          <S.Technologies>
            {technologies.tools.map((tool: string) => (
              <S.Technology key={tool}>{tool}</S.Technology>
            ))}
          </S.Technologies>
        }
      </S.TechnologiesContainer>
    )
  }
  return <h3>Carregando...</h3>
}

export default Technologies
