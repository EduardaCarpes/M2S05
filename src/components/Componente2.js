const Componente2 = props => {
  const {nome, raça, idade} = props
  return (
    <ul>
      <li>Nome: {nome}</li>
      <li>Raça: {raça}</li>
      <li>Idade: {idade}</li>
    </ul>
  )
}

export default Componente2;