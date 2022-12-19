import Item from '../Item/Item'

const ItemList = ({character}) => {
  console.log(character)
  return (
    <>
        {character.map((element) => <Item key={element.id} {...element}/>)}
    </>
  )
}

export default ItemList
