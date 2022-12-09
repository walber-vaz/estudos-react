import ContainerLang from './ContainerLang'
import ContainerUl from './ContainerUl'
import Title from './Title'

import PropTypes from 'prop-types'

const ListLang = (props) => {
  const { arryLang } = props

  return (
    <>
      <ContainerLang>
        <Title />
        <ContainerUl arryLang={arryLang} />
      </ContainerLang>
    </>
  )
}

ListLang.propTypes = {
  arryLang: PropTypes.array,
}

export default ListLang
