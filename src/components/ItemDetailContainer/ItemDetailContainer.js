import '../ItemDetailContainer/ItemDetailContainer.css';
import { useParams } from "react-router";

export const ItemDetailContainer = () => {
    const {personajesid} = useParams ();
  return (
    <div className="container text-center text-white">
        <h2 className='h2-detail'>
          {personajesid}
        </h2>
    </div>
  )
}

