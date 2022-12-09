import Description from './Description'
import Img from './Img'
import Sum from './Sum'
import Title from './Title'

import PropTypes from 'prop-types'

import styles from './Card.module.css'

const Card = (props) => {
  const { title, description, url, sum } = props.content

  return (
    <div className={styles.app}>
      <Title title={title} />
      <Description description={description} />
      <Sum sum={sum} />
      <Img url={url} />
    </div>
  )
}

Card.defaultProps = {
  content: {
    title: "Nenhum título encontrado",
    description: "Nenhuma descrição encontrada",
    url: "Nenhuma url encontrada",
    sum: () => "Nenhuma função encontrada",
  },
}

Card.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    sum: PropTypes.func.isRequired,
  }),
}

export default Card
