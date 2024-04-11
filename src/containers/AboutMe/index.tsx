import linkedin from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'
import instagram from '../../assets/icons/instagram.png'

import * as S from './styles'

import { useGetAboutMeQuery } from '../../services/api'

const AboutMe = () => {
  const { data: profile } = useGetAboutMeQuery()

  if (profile) {
    return (
      <S.AboutMeSection id="aboutMe">
        <div>
          <S.AboutMeTitle>{profile.title}</S.AboutMeTitle>
          {profile.description.map((paragraph: string) => (
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
  return <h3>Carregando...</h3>
}

export default AboutMe
