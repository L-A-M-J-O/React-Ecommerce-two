import characters from "../../data"

export default function ItemListContainer({saludo}) {
    const data = characters;
  return (
    <div className="row justify-content-end text-center">
        <h1 className="rounded-lg font-bold text-white text-2xl">{saludo}</h1>
            {
                data.map((element,index) => 
                 <div className="col-3 mt-5" key={index}>
                    <h1 className=" text-white text-base">{element.name}</h1>
                    <h3 className=" text-white text-base">{element.species}</h3>
                    <img src={element.image} alt=''/>
                 </div>
                )
            }
    </div>
  )
}
