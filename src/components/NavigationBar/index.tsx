import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import * as S from './styles'
import { changeSection } from '../../store/reducers/navBar'

const NavigationBar = () => {
  const dispatch = useDispatch()

  const { sections } = useSelector((state: RootReducer) => state.navBar)

  window.addEventListener('scroll', () => {
    const y = window.scrollY
    if (y >= 1300) {
      dispatch(changeSection('projetos'))
    } else if (y >= 700) {
      dispatch(changeSection('tecnologias'))
    } else {
      dispatch(changeSection('sobre'))
    }
  })

  return (
    <S.NavBar>
      <li>
        <a
          href="#aboutMe"
          className={sections == 'sobre' ? 'active' : ''}
          onClick={() => dispatch(changeSection('sobre'))}
        >
          Sobre mim
        </a>
      </li>
      <li>-</li>
      <li>
        <a
          href="#technologies"
          className={sections == 'tecnologias' ? 'active' : ''}
          onClick={() => dispatch(changeSection('tecnologias'))}
        >
          Tecnologias
        </a>
      </li>
      <li>-</li>
      <li>
        <a
          href="#projects"
          className={sections == 'projetos' ? 'active' : ''}
          onClick={() => dispatch(changeSection('projetos'))}
        >
          Projetos
        </a>
      </li>
    </S.NavBar>
  )
}

export default NavigationBar
