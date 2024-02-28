import * as S from './styles'

const NavigationBar = () => {
  return (
    <S.NavBar>
      <li>
        <a href="#aboutMe">Sobre mim</a>
      </li>
      <li>-</li>
      <li>
        <a href="#technologies">Tecnologias</a>
      </li>
      <li>-</li>
      <li>
        <a className="active" href="">
          Projetos
        </a>
      </li>
    </S.NavBar>
  )
}

export default NavigationBar
