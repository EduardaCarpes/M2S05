import PropTypes from 'prop-types'

const Componente3 = ({name, animal }) => {

  return <p>Oi, eu sou o {name}! Sou um {animal} muito dócil!</p>

}

Componente3.propTypes = {
  name: PropTypes.string,
  animal: PropTypes.string,
}

export default Componente3;