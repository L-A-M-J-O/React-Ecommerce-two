import Item from '../Item/Item'

const ItemList = ({character}) => {
  console.log(character)
  return (
    <div className='row justify-conent-center mt-5'>
        {character.map((element) => <Item key={element.id} {...element}/>)}
    </div>
  )
}

export default ItemList
