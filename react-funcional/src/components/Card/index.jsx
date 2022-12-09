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

Card.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    sum: PropTypes.func,
  }),
}

export default Card
