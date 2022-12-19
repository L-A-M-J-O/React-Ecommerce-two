
const ItemDetail = ({name, image}) => {
  console.log(name)
  return (
    <>
      <div>
        <h1>{name}</h1>
        <img src={image} alt='the Character'/>
      </div>
    </>
  )
}

export default ItemDetail
