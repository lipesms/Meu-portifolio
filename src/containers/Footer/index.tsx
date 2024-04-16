import * as S from './styles'

import pointingUp from '../../assets/icons/pointing_up.png'

const Footer = () => {
  return (
    <S.Foot>
      <S.DevelopmentInfos>
        Projetado no <a href="https://www.figma.com/">Figma</a> e codificado no{' '}
        <a href="https://code.visualstudio.com/">Visual studio code</a>.
        Desenvolvido com <a href="https://react.dev/">React</a> e{' '}
        <a href="https://www.typescriptlang.org/">Typescript</a>, deploy pela{' '}
        <a href="https://vercel.com/">Vercel</a>. Todos os textos utilizando
        Roboto e ícones pela
        <a href="https://www.flaticon.com/br/"> flaticon</a>.
      </S.DevelopmentInfos>
      <S.Copy>© Copyright 2024. Feito por Felipe Martins.</S.Copy>
      <span className="up">
        <a href="#aboutMe">
          <img src={pointingUp} alt="" />
        </a>
      </span>
    </S.Foot>
  )
}

export default Footer
