import * as S from './styles'

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
        <a href="https://www.flaticon.com/br/">flaticon</a>.
      </S.DevelopmentInfos>
      <S.Copy>© Copyright 2024. Feito por Felipe Martins.</S.Copy>
    </S.Foot>
  )
}

export default Footer
