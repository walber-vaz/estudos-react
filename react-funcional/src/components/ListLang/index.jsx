import ContainerLang from './ContainerLang'
import ContainerUl from './ContainerUl'
import styles from './ListLang.module.css'
import Title from './Title'

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

export default ListLang
