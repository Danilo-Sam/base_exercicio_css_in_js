import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { breakpoints } from '../../styles/index'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const VagaLi = styled.li`
  border: 1px solid ${variaveis.corPrincipal};
  background-color: ${variaveis.corSecundaria};
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${variaveis.corPrincipal};
    color: ${variaveis.corSecundaria};
  }
`

const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

const VagaLink = styled.a`
  border-color: ${variaveis.corSecundaria};
  background-color: ${variaveis.corPrincipal};
  color: ${variaveis.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  &:hover {
    border-color: ${variaveis.corPrincipal};
    background-color: ${variaveis.corSecundaria};
    color: ${variaveis.corPrincipal};
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

const Vaga = (props: Props) => (
  <VagaLi>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaLi>
)

export default Vaga
