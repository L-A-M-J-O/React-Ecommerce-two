import { useParams } from "react-router"

export const ItemDetailContainer = () => {
    const {personajesid} = useParams ();
  return (
    <div>
        {personajesid}
    </div>
  )
}

