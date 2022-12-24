import Item from '../Item/Item'

const ItemList = ({character}) => {
  console.log(character)
  return (
    <div className='row justify-content-center mt-5 box-items'>
        {character.map((element) => <Item key={element.id} {...element}/>)}
    </div>
  )
}

export default ItemList
