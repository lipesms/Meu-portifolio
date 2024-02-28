import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'

import * as S from './styles'

const Projects = () => {
  const { itens } = useSelector((state: RootReducer) => state.projects)

  console.log(itens[0].image)

  return (
    <S.Projects>
      {itens.map((project) => (
        <a href="" key={project.title}>
          <S.Project>
            <S.ProjectImage
              src={project.image}
              alt={`imagem da home page do site ${project.title}`}
            />
            <S.ProjectInfos className="projectInfos">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </S.ProjectInfos>
          </S.Project>
        </a>
      ))}
    </S.Projects>
  )
}

export default Projects
