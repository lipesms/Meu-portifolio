import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'

import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'

import * as S from './styles'

const AboutMe = () => {
  const { title, description } = useSelector(
    (state: RootReducer) => state.aboutMe
  )

  return (
    <S.AboutMeSection id="aboutMe">
      <div>
        <S.AboutMeTitle>{title}</S.AboutMeTitle>
        {description.map((paragraph: string) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <S.profileLinks>
        <a
          href="https://linkedin.com/in/lipesms"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="logo do linkedin" />
        </a>
        <a href="https://github.com/lipesms" target="_blank" rel="noreferrer">
          <img src={github} alt="logo do github" />
        </a>
        <a
          href="https://www.instagram.com/felipe_slm/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="logo do instagram" />
        </a>
      </S.profileLinks>
    </S.AboutMeSection>
  )
}

export default AboutMe
