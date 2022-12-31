import { useState } from 'react';
import '../../components/Item/Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, name, image, specie, origin, status, price}) => {

    const [active, setActive] = useState('Alive');
    const [desactive, setDesactive] = useState('Dead');
    const [nose, setNose] = useState('No evidence')

    if(status >= 1){
        status = active;
    }
    else if(status <= 0){
        status = desactive
    }
    else { status = nose}


  return (
    <div className="col-lg-4">
        <div className="card card-margin">
            <div className="card-header no-border">
                <h5 className="card-title">{name}</h5>
            </div>
            <div className="card-body pt-0 bg-white">
                <div className="widget-49">
                    <div className="widget-49-title-wrapper bg-white">
                        <div className="widget-49-date-primary bg-white mb-3">
                          <img src={image} alt='character'/>
                        </div>
                        <div className="widget-49-meeting-info">
                            <span className="widget-49-pro-title bg-white">{specie}</span>
                            <span className="widget-49-meeting-time bg-white">{origin}</span>
                            <h3 className='text-black bg-white'>€{price}</h3>
                        </div>
                    </div>
                    <ol className="widget-49-meeting-points bg-white">
                        <li className="widget-49-meeting-item bg-white"><span className='span-status bg-white text-black capitalize'>{status}</span></li>
                    </ol>
                    <div className="widget-49-meeting-action bg-white">
                        <Link to={`/detail/${id}`} className="button-6 btn-sm btn-flash-border-primary border">Get in</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item


