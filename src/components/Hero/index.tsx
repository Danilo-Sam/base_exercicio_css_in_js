import styled from 'styled-components'
import { breakpoints } from '../../styles'
import variaveis from '../../styles/variaveis'

const Form = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${variaveis.corPrincipal};
    content: '';
    opacity: 0.7;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
    padding: 24px 0;
  }
`

const Container = styled.div`
  position: relative;
  color: #eee;
`

const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
  }
`

const Hero = () => (
  <Form>
    <Container>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </Container>
  </Form>
)

export default Hero
